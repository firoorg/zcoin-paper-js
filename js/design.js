// Basic initialization and switching for bitcoin vs. alternative cryptocurrencies
function setCryptoCurrency(toThis) {
    window.currencyName = toThis;
    switch (toThis) {
        case 'Bitcoin':
            window.networkVersion = 0x00;
            window.privateKeyPrefix = 0x80;
            window.WIFPrefix = '5';
            window.compressedWIFPrefix = '[LK]';
            break;
        case 'Litecoin':
            window.networkVersion = 0x30;
            window.privateKeyPrefix = 0xb0;
            window.WIFPrefix = '6';
            window.compressedWIFPrefix = 'T';
            document.title = 'Litecoin paper wallet generator';
            break;
        case 'Dogecoin':
            window.networkVersion = 0x1e;
            window.privateKeyPrefix = 0x9e;
            window.WIFPrefix = '6';
            window.compressedWIFPrefix = 'Q';
            document.title = 'Dogecoin paper wallet generator. Wow! Many coin. Such shiny.';
            break;
        case 'Testnet':
            window.networkVersion = 0x6F;
            window.privateKeyPrefix = 0xEF;
            window.WIFPrefix = '9';
            window.compressedWIFPrefix = 'c';
            document.title = 'Bitcoin TESTNET paper wallet generator';
            break;
        case 'Firo':
            window.networkVersion = 0x52;
            window.privateKeyPrefix = 0x52 + 128;
            window.WIFPrefix = 'X'; // TODO: Unknown
            window.compressedWIFPrefix = '[LK]'; // TODO: Unknown
            document.title = 'Firo paper wallet generator';
            break;
        default:
            alert('Invalid cryptocurrency "' + toThis + '" at initialization. Defaulting to Firo.');
            setCryptoCurrency('Firo');
    } // eof switch
    return (true);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var myDesign = getParameterByName('design');
window.suppliesURL = 'https://firopaperwallet.com/?p=' + myDesign + '#purchase';

switch (myDesign) {
    case 'alt-litecoin':
        setCryptoCurrency('Litecoin');
        break;
    case 'alt-dogecoin':
        setCryptoCurrency('Dogecoin');
        break;
    case 'alt-testnet':
        setCryptoCurrency('Testnet');
        break;
    case 'firo':
        setCryptoCurrency('Firo');
        break;
    default:
        setCryptoCurrency('Firo');
        window.suppliesURL = 'https://firopaperwallet.com/#purchase'; // remove special currency flag
}