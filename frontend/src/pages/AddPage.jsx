///import React from 'react'

////const AddPage = () => {

  ///  return (
     //   <div className="flex flex-col items-center justify-center gap-5 p-5">
       //     <h1 className="text-5xl">Add</h1>
  ///      </div>
    //)
//}
import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

const AddPage = () => {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    productName: '',
    brandName: '',
    features: '',
    rentSell: '',
    amount: '',
  });
  const [errors, setErrors] = useState({});

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert('You can only upload up to 5 images.');
      return;
    }
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  const handleThumbnailClick = (index) => {
    const reordered = [images[index], ...images.filter((_, i) => i !== index)];
    setImages(reordered);
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!form.productName) tempErrors.productName = "Product Name is required";
    if (!form.brandName) tempErrors.brandName = "Brand Name is required";
    if (!form.features) tempErrors.features = "Features are required";
    if (!form.rentSell) tempErrors.rentSell = "Please select Rent/Sell";
    if (!form.amount) tempErrors.amount = "Amount is required";
    if (form.amount && (isNaN(form.amount) || Number(form.amount) <= 0)) tempErrors.amount = "Amount must be a positive number";
    if (images.length === 0) tempErrors.images = "At least one image is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert('Please fix the errors in the form.');
      return;
    }
    console.log('Form Submitted:', form);
    console.log('Uploaded Images:', images);
    alert('Form submitted successfully! Check console.');
    resetForm();
  };

  const resetForm = () => {
    setForm({
      productName: '',
      brandName: '',
      features: '',
      rentSell: '',
      amount: '',
    });
    setImages([]);
    setErrors({});
  };

  return (
    <Container maxWidth="xs" sx={{ py: 3 }}>
      {/* Header */}
      <Box mb={2} display="flex" alignItems="center">
        <IconButton size="small">
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Main Image Area */}
      <Box
        sx={{
          width: '100%',
          height: 200,
          borderRadius: 2,
          backgroundColor: '#e0f7fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {images.length > 0 ? (
          <img src={images[0]} alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <>
            <input
              accept="image/*"
              type="file"
              multiple
              style={{ display: 'none' }}
              id="upload-image"
              onChange={handleImageUpload}
            />
            <label htmlFor="upload-image">
              <IconButton component="span">
                <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </label>
          </>
        )}
      </Box>

      {/* Thumbnails */}
      {images.length > 1 && (
        <Box display="flex" gap={1} mb={2}>
          {images.map((img, index) => (
            <Box key={index} position="relative">
              <img
                src={img}
                alt={'Thumb ${index}'}
                style={{
                  width: 50,
                  height: 50,
                  objectFit: 'cover',
                  borderRadius: 4,
                  cursor: 'pointer',
                  border: index === 0 ? '2px solid #00bcd4' : '1px solid #ccc'
                }}
                onClick={() => handleThumbnailClick(index)}
              />
              <IconButton
                size="small"
                onClick={() => handleDeleteImage(index)}
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      {/* Form */}
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Product Name"
          name="productName"
          value={form.productName}
          onChange={handleChange}
          margin="normal"
          error={!!errors.productName}
          helperText={errors.productName}
        />
        <TextField
          fullWidth
          label="Brand Name"
          name="brandName"
          value={form.brandName}
          onChange={handleChange}
          margin="normal"
          error={!!errors.brandName}
          helperText={errors.brandName}
        />
        <TextField
          fullWidth
          label="Features"
          name="features"
          value={form.features}
          onChange={handleChange}
          margin="normal"
          error={!!errors.features}
          helperText={errors.features}
        />
        <FormControl fullWidth margin="normal" error={!!errors.rentSell}>
          <InputLabel>Rent/Sell</InputLabel>
          <Select
            name="rentSell"
            value={form.rentSell}
            onChange={handleChange}
            label="Rent/Sell"
          >
            <MenuItem value="Rent">Rent</MenuItem>
            <MenuItem value="Sell">Sell</MenuItem>
          </Select>
          {errors.rentSell && (
            <Typography variant="caption" color="error">{errors.rentSell}</Typography>
          )}
        </FormControl>
        <TextField
          fullWidth
          label="Amount"
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          margin="normal"
          error={!!errors.amount}
          helperText={errors.amount}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#00bcd4' }}
          onClick={handleSubmit}
          disabled={images.length === 0}  // Disables submit if no photos are uploaded
        >
          Done
        </Button>
      </Box>
    </Container>
  );
};

export default AddPage;