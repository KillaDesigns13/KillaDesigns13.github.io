/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6889845719111',
        node: document.getElementById('product-component-1703904157867'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "1rem",
        "padding-top": "5%",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#c76dd7"
        },
        "background-color": "#dd79ef",
        ":focus": {
          "background-color": "#c76dd7"
        },
        "border-radius": "40px",
        "padding-left": "30%",
        "padding-right": "30%"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#c76dd7"
        },
        "background-color": "#dd79ef",
        ":focus": {
          "background-color": "#c76dd7"
        },
        "border-radius": "40px",
        "padding-left": "100px",
        "padding-right": "100px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#c76dd7"
        },
        "background-color": "#dd79ef",
        ":focus": {
          "background-color": "#c76dd7"
        },
        "border-radius": "40px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#dd79ef",
        ":hover": {
          "background-color": "#c76dd7"
        },
        ":focus": {
          "background-color": "#c76dd7"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890585751623',
        node: document.getElementById('product-component-1704249751548'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890586144839',
        node: document.getElementById('product-component-1704250961823'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890589126727',
        node: document.getElementById('product-component-1704251007597'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890590273607',
        node: document.getElementById('product-component-1704251253269'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890591158343',
        node: document.getElementById('product-component-1704251312844'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890769088583',
        node: document.getElementById('product-component-1704333332913'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890769612871',
        node: document.getElementById('product-component-1704333479700'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890770661447',
        node: document.getElementById('product-component-1704333554155'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890769907783',
        node: document.getElementById('product-component-1704333663091'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890770825287',
        node: document.getElementById('product-component-1704333741364'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890771251271',
        node: document.getElementById('product-component-1704333799424'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890770202695',
        node: document.getElementById('product-component-1704333948117'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '7ff02a-2.myshopify.com',
      storefrontAccessToken: '872fe7fc437cb0f3c8a6201a8764fef0',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6890770399303',
        node: document.getElementById('product-component-1704334053523'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-size": "1rem",
                "padding-top": "5%",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "30%",
                "padding-right": "30%"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px"
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                "background-color": "#dd79ef",
                ":focus": {
                  "background-color": "#c76dd7"
                },
                "border-radius": "40px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#dd79ef",
                ":hover": {
                  "background-color": "#c76dd7"
                },
                ":focus": {
                  "background-color": "#c76dd7"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
          }
        },
      });
    });
  }
})();
/*]]>*/

