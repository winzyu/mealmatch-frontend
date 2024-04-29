import React from 'react';

const GroceryStoreSelector = ({ navigation }) => {
  const handleStoreSelection = (routeName) => {
    navigation.navigate(routeName);
  };

  // Inline styles
  const pageCenterStyle = {
    background: 'linear-gradient(270deg, rgba(229, 141, 131, 0.41) 0%, rgba(233, 144, 117, 0.41) 10.83%, rgba(237, 148, 102, 0.41) 21.67%, rgba(238, 149, 97, 0.41) 51.17%, rgba(247, 157, 64, 0.41) 100%)',
    
    paddingTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top',
    minHeight: '100vh',
    backgroundColor: '#F8F7F7',
  };

  const storeSelectorStyle = {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to start from the top
    padding: '40px 20px', // Increase top padding to push content down
    backgroundColor: '#fff',
    width: '280px',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '30px', // Reduced to move the content up
    // rest of the style remains the same
  };
  
  const headerTextStyle = {
    marginBottom: '20px',
    color: '#000000',
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '0.05em',
    textAlign: 'center', // Ensure text is centered
    width: '100%', // Use full width to center text properly
  };


  const storeOptionStyle = {
    background: '#fff',
    border: '1px solid #ddd', // Slight border as seen in the photo
    margin: '10px 0',
    padding: '10px 20px',
    borderRadius: '20px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'flex-start', // Align text to the left
    alignItems: 'center',
    cursor: 'pointer',
    width: '240px', // Adjusted for padding and total width
  };

  const storeImageStyle = {
    marginRight: '10px', // Space between the logo and text
    height: '30px', // Adjust size as needed
    width: 'auto',
  };

  return (
    <b>
    <div style={pageCenterStyle}>
      <div style={storeSelectorStyle}>
        <div style={headerTextStyle}>Select your go-to grocery store</div>
        <button style={storeOptionStyle} onClick={() => handleStoreSelection('FastFoodLogos')}>
          <img style={storeImageStyle} src="src/assets/logos/Safeway.png" alt="Safeway" />
        </button>
        <button style={storeOptionStyle} onClick={() => handleStoreSelection('FastFoodLogos')}>
          <img style={storeImageStyle} src="src/assets/logos/TraderJoes.png" alt="Trader Joe's" />
        </button>
        <button style={storeOptionStyle} onClick={() => handleStoreSelection('FastFoodLogos')}>
          <img style={storeImageStyle} src="src/assets/logos/Target.png" alt="Target" />
        </button>
        <button style={storeOptionStyle} onClick={() => handleStoreSelection('FastFoodLogos')}>
          <img style={storeImageStyle} src="src/assets/logos/Costco.png" alt="Costco" />
        </button>
      </div>
    </div>
    </b>
  );
};

export default GroceryStoreSelector;