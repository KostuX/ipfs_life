// data is taken from https://www.garykessler.net/library/file_sigs.html

// COPYRIGHT NOTICE
// All information on this page © 2002-2023, Gary C. Kessler. 
// Permission to use the material here is extended to any of this page's visitors,
// as long as appropriate attribution is provided and the information is not altered 
// in any way without express written permission of the author.

module.exports = async function(){


    
   const  filesigs = 
     [
        {
        "File description": "High Efficiency Image Container (HEIC)_1",
        "Header (hex)": "00 00 00",
        "File extension": "AVIF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "High Efficiency Image Container (HEIC)_2",
        "Header (hex)": "00 00 00 20 66 74 79 70 68 65 69 63",
        "File extension": "HEIC",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "JPEG2000 image files",
        "Header (hex)": "00 00 00 0C 6A 50 20 20",
        "File extension": "JP2",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "3GPP multimedia files",
        "Header (hex)": "00 00 00 14 66 74 79 70",
        "File extension": "3GP",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-4 v1",
        "Header (hex)": "00 00 00 14 66 74 79 70 69 73 6F 6D",
        "File extension": "MP4",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "3rd Generation Partnership Project 3GPP",
        "Header (hex)": "00 00 00 14 66 74 79 70",
        "File extension": "3GG|3GP|3G2",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Disk Image",
        "Header (hex)": "00 00 00 00 14 00 00 00",
        "File extension": "TBI",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Bitcoin Core wallet.dat file",
        "Header (hex)": "00 00 00 00 62 31 05 00 09 00 00 00 00 20 00 00 00 09 00 00 00 00 00 00",
        "File extension": "DAT",
        "FileClass": "Finance",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-4 video_1",
        "Header (hex)": "00 00 00 18 66 74 79 70",
        "File extension": "3GP5|M4V|MP4",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-4 video_2",
        "Header (hex)": "00 00 00 1C 66 74 79 70",
        "File extension": "MP4",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "3GPP2 multimedia files",
        "Header (hex)": "00 00 00 20 66 74 79 70",
        "File extension": "3GP",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Apple audio and video",
        "Header (hex)": "00 00 00 20 66 74 79 70 4D 34 41",
        "File extension": "M4A",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "3rd Generation Partnership Project 3GPP2",
        "Header (hex)": "00 00 00 20 66 74 79 70",
        "File extension": "3GG|3GP|3G2",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows icon|printer spool file",
        "Header (hex)": "00 00 01 00",
        "File extension": "ICO|SPL",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG video file",
        "Header (hex)": "00 00 01 B3",
        "File extension": "MPG",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "00 00 01 B7"
        },
        {
        "File description": "DVD video file",
        "Header (hex)": "00 00 01 BA",
        "File extension": "MPG|VOB",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "00 00 01 B9"
        },
        {
        "File description": "Windows cursor",
        "Header (hex)": "00 00 02 00",
        "File extension": "CUR",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compucon-Singer embroidery design file",
        "Header (hex)": "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00",
        "File extension": "XXX",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuattroPro spreadsheet",
        "Header (hex)": "00 00 02 00",
        "File extension": "WB2",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Amiga Hunk executable",
        "Header (hex)": "00 00 03 F3",
        "File extension": "(none)",
        "FileClass": "System",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Wii images container",
        "Header (hex)": "00 20 AF 30",
        "File extension": "TPL",
        "FileClass": "System",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus 1-2-3 (v1)",
        "Header (hex)": "00 00 02 00 06 04 06 00",
        "File extension": "WK1",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus 1-2-3 (v3)",
        "Header (hex)": "00 00 1A 00 00 10 04 00",
        "File extension": "WK3",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus 1-2-3 (v4-v5)",
        "Header (hex)": "00 00 1A 00 02 10 04 00",
        "File extension": "WK4|WK5",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus 1-2-3 (v9)",
        "Header (hex)": "00 00 1A 00 05 10 04",
        "File extension": "123",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quark Express (Intel)",
        "Header (hex)": "00 00 49 49 58 50 52",
        "File extension": "QXD",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quark Express (Motorola)",
        "Header (hex)": "00 00 4D 4D 58 50 52",
        "File extension": "QXD",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Help file_1",
        "Header (hex)": "00 00 FF FF FF FF",
        "File extension": "HLP",
        "FileClass": "Windows",
        "Header offset": "6",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TrueType font file",
        "Header (hex)": "00 01 00 00 00",
        "File extension": "TTF",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Money file",
        "Header (hex)": "00 01 00 00 4D 53 49 53 41 4D 20 44 61 74 61 62 61 73 65",
        "File extension": "MNY",
        "FileClass": "Finance",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Access 2007",
        "Header (hex)": "00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42",
        "File extension": "ACCDB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Access",
        "Header (hex)": "00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74 20 44 42",
        "File extension": "MDB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Palm Address Book Archive",
        "Header (hex)": "00 01 42 41",
        "File extension": "ABA",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Palm DateBook Archive",
        "Header (hex)": "00 01 42 44",
        "File extension": "DBA",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Netscape Navigator (v4) database",
        "Header (hex)": "00 06 15 61 00 00 00 02 00 00 04 D2 00 00 10 00",
        "File extension": "DB",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Mbox table of contents file",
        "Header (hex)": "00 0D BB A0",
        "File extension": "(none)",
        "FileClass": "E-mail",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "FLIC animation",
        "Header (hex)": "00 11",
        "File extension": "FLI",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BIOS details in RAM",
        "Header (hex)": "00 14 00 00 01 02",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Netscape Communicator (v4) mail folder",
        "Header (hex)": "00 1E 84 90 00 00 00 00",
        "File extension": "SNM",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Paessler PRTG Monitoring System",
        "Header (hex)": "00 3B 05 00 01 00 00 00",
        "File extension": "DB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerPoint presentation subheader_1",
        "Header (hex)": "00 6E 1E F0",
        "File extension": "PPT",
        "FileClass": "Presentation",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Webex Advanced Recording Format",
        "Header (hex)": "01 00 02 00",
        "File extension": "ARF",
        "FileClass": "Video",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Firebird and Interbase database files",
        "Header (hex)": "01 00 39 30",
        "File extension": "FDB|GDB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "The Bat! Message Base Index",
        "Header (hex)": "01 01 47 19 A4 00 00 00 00 00 00 00",
        "File extension": "TBI",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SQL Data Base",
        "Header (hex)": "01 0F 00 00",
        "File extension": "MDF",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Novell LANalyzer capture file",
        "Header (hex)": "01 10",
        "File extension": "TR1",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Silicon Graphics RGB Bitmap",
        "Header (hex)": "01 DA 01 01 00 03",
        "File extension": "RGB",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Micrografx vector graphic file",
        "Header (hex)": "01 FF 02 04 03 02",
        "File extension": "DRW",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Digital Speech Standard file",
        "Header (hex)": "02 64 73 73",
        "File extension": "DSS",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MapInfo Native Data Format",
        "Header (hex)": "03",
        "File extension": "DAT",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "dBASE III file",
        "Header (hex)": "03",
        "File extension": "DB3",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quicken price history",
        "Header (hex)": "03 00 00 00",
        "File extension": "QPH",
        "FileClass": "Finance",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Nokia PC Suite Content Copier file",
        "Header (hex)": "03 00 00 00",
        "File extension": "NFC",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Approach index file",
        "Header (hex)": "03 00 00 00 41 50 50 52",
        "File extension": "ADX",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Digital Speech Standard (v3)",
        "Header (hex)": "03 64 73 73",
        "File extension": "DSS",
        "FileClass": "Audio",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "dBASE IV file",
        "Header (hex)": "04",
        "File extension": "DB4",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "INFO2 Windows recycle bin_1",
        "Header (hex)": "04 00 00 00",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "INFO2 Windows recycle bin_2",
        "Header (hex)": "05 00 00 00",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Adobe InDesign",
        "Header (hex)": "06 06 ED F5 D8 1D 46 E5 BD 31 EF E7 FE 74 B7 1D",
        "File extension": "INDD",
        "FileClass": "Media",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Material Exchange Format",
        "Header (hex)": "06 0E 2B 34 02 05 01 01 0D 01 02 01 01 02",
        "File extension": "MXF",
        "FileClass": "Media",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Generic drawing programs",
        "Header (hex)": "07",
        "File extension": "DRW",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SkinCrafter skin",
        "Header (hex)": "07 53 4B 46",
        "File extension": "SKF",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DesignTools 2D Design file",
        "Header (hex)": "07 64 74 32 64 64 74 64",
        "File extension": "DTD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "dBASE IV or dBFast configuration file",
        "Header (hex)": "08",
        "File extension": "DB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_1",
        "Header (hex)": "09 08 10 00 00 06 05 00",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZSOFT Paintbrush file_1",
        "Header (hex)": "0A 02 01 01",
        "File extension": "PCX",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZSOFT Paintbrush file_2",
        "Header (hex)": "0A 03 01 01",
        "File extension": "PCX",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZSOFT Paintbrush file_3",
        "Header (hex)": "0A 05 01 01",
        "File extension": "PCX",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MultiBit Bitcoin wallet file",
        "Header (hex)": "0A 16 6F 72 67 2E 62 69 74 63 6F 69 6E 2E 70 72",
        "File extension": "WALLET",
        "FileClass": "e-money",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Monochrome Picture TIFF bitmap",
        "Header (hex)": "0C ED",
        "File extension": "MP",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DeskMate Document",
        "Header (hex)": "0D 44 4F 43",
        "File extension": "DOC",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Nero CD compilation",
        "Header (hex)": "0E 4E 65 72 6F 49 53 4F",
        "File extension": "NRI",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DeskMate Worksheet",
        "Header (hex)": "0E 57 4B 53",
        "File extension": "WKS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerPoint presentation subheader_2",
        "Header (hex)": "0F 00 E8 03",
        "File extension": "PPT",
        "FileClass": "Presentation",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Sibelius Music - Score",
        "Header (hex)": "0F 53 49 42 45 4C 49 55 53",
        "File extension": "SIB",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Easy CD Creator 5 Layout file",
        "Header (hex)": "10 00 00 00",
        "File extension": "CL5",
        "FileClass": "Utility",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows prefetch file",
        "Header (hex)": "11 00 00 00 53 43 43 41",
        "File extension": "PF",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus Notes database template",
        "Header (hex)": "1A 00 00",
        "File extension": "NTF",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus Notes database",
        "Header (hex)": "1A 00 00 04 00 00",
        "File extension": "NSF",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "LH archive (old vers.-type 1)",
        "Header (hex)": "1A 02",
        "File extension": "ARC",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "LH archive (old vers.-type 2)",
        "Header (hex)": "1A 03",
        "File extension": "ARC",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "LH archive (old vers.-type 3)",
        "Header (hex)": "1A 04",
        "File extension": "ARC",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "LH archive (old vers.-type 4)",
        "Header (hex)": "1A 08",
        "File extension": "ARC",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "LH archive (old vers.-type 5)",
        "Header (hex)": "1A 09",
        "File extension": "ARC",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compressed archive file",
        "Header (hex)": "1A 0B",
        "File extension": "PAK",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinPharoah capture file",
        "Header (hex)": "1A 35 01 00",
        "File extension": "ETH",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WebM video file",
        "Header (hex)": "1A 45 DF A3",
        "File extension": "WEBM",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Matroska stream file_1",
        "Header (hex)": "1A 45 DF A3",
        "File extension": "MKV",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Matroska stream file_2",
        "Header (hex)": "1A 45 DF A3 93 42 82 88",
        "File extension": "MKV",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Runtime Software disk image",
        "Header (hex)": "1A 52 54 53 20 43 4F 4D",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WordStar Version 5.0-6.0 document",
        "Header (hex)": "1D 7D",
        "File extension": "WS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GZIP archive file",
        "Header (hex)": "1F 8B 08",
        "File extension": "GZ",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VLC Player Skin file",
        "Header (hex)": "1F 8B 08",
        "File extension": "VLT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Synology router configuration backup file",
        "Header (hex)": "1F 8B 08 00",
        "File extension": "DSS",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compressed tape archive_1",
        "Header (hex)": "1F 9D 90",
        "File extension": "TAR.Z",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compressed tape archive_2",
        "Header (hex)": "1F A0",
        "File extension": "TAR.Z",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MapInfo Sea Chart",
        "Header (hex)": "21",
        "File extension": "BSB",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NOAA Raster Navigation Chart (RNC) file",
        "Header (hex)": "21 0D 0A 43 52 52 2F 54 68 69 73 20 65 6C 65 63",
        "File extension": "BSB",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AIN Compressed Archive",
        "Header (hex)": "21 12",
        "File extension": "AIN",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Unix archiver (ar)-MS Program Library Common Object File Format (COFF)",
        "Header (hex)": "21 3C 61 72 63 68 3E 0A",
        "File extension": "LIB",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Outlook Exchange Offline Storage Folder",
        "Header (hex)": "21 42 44 4E",
        "File extension": "OST",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Cerius2 file",
        "Header (hex)": "23 20",
        "File extension": "MSI",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VMware 4 Virtual Disk description",
        "Header (hex)": "23 20 44 69 73 6B 20 44",
        "File extension": "VMDK",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Developer Studio project file",
        "Header (hex)": "23 20 4D 69 63 72 6F 73",
        "File extension": "DSP",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Earth Keyhole Placemark file",
        "Header (hex)": "23 20 54 68 69 73 20 69 73 20 61 6E 20 4B 65 79",
        "File extension": "ETA",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Adaptive Multi-Rate ACELP Codec (GSM)",
        "Header (hex)": "23 21 41 4D 52",
        "File extension": "AMR",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Skype audio compression",
        "Header (hex)": "23 21 53 49 4C 4B 0A",
        "File extension": "SIL",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Radiance High Dynamic Range image file",
        "Header (hex)": "23 3F 52 41 44 49 41 4E",
        "File extension": "HDR",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VBScript Encoded script",
        "Header (hex)": "23 40 7E 5E",
        "File extension": "VBE",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NVIDIA Scene Graph binary file",
        "Header (hex)": "23 4E 42 46",
        "File extension": "NBF",
        "FileClass": "Video",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Brother-Babylock-Bernina Home Embroidery",
        "Header (hex)": "23 50 45 43 30 30 30 31",
        "File extension": "PEC",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Brother-Babylock-Bernina Home Embroidery",
        "Header (hex)": "23 50 45 53 30",
        "File extension": "PES",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SPSS Data file",
        "Header (hex)": "24 46 4C 32 40 28 23 29",
        "File extension": "SAV",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Encapsulated PostScript file",
        "Header (hex)": "25 21 50 53 2D 41 64 6F",
        "File extension": "EPS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PostScript file",
        "Header (hex)": "25 21 50 53 2D 41 64 6F 62 65 2D",
        "File extension": "PS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PDF file",
        "Header (hex)": "25 50 44 46",
        "File extension": "PDF|FDF",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "25 25 45 4F 46"
        },
        {
        "File description": "Fuzzy bitmap (FBM) file",
        "Header (hex)": "25 62 69 74 6D 61 70",
        "File extension": "FBM",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BinHex 4 Compressed Archive",
        "Header (hex)": "28 54 68 69 73 20 66 69",
        "File extension": "HQX",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Symantec Wise Installer log",
        "Header (hex)": "2A 2A 2A 20 20 49 6E 73",
        "File extension": "LOG",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compressed archive",
        "Header (hex)": "2D 6C 68",
        "File extension": "LHA|LZH",
        "FileClass": "Compressed archive",
        "Header offset": "2",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RealPlayer video file (V11+)",
        "Header (hex)": "2E 52 45 43",
        "File extension": "IVR",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RealMedia streaming media",
        "Header (hex)": "2E 52 4D 46",
        "File extension": "RM|RMVB",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RealAudio file",
        "Header (hex)": "2E 52 4D 46 00 00 00 12",
        "File extension": "RA",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RealAudio streaming media",
        "Header (hex)": "2E 72 61 FD 00",
        "File extension": "RA",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NeXT-Sun Microsystems audio file",
        "Header (hex)": "2E 73 6E 64",
        "File extension": "AU",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Thunderbird-Mozilla Mail Summary File",
        "Header (hex)": "2F 2F 20 3C 21 2D 2D 20 3C 6D 64 62 3A 6D 6F 72 6B 3A 7A",
        "File extension": "MSF",
        "FileClass": "E-mail",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS security catalog file",
        "Header (hex)": "30",
        "File extension": "CAT",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Event Viewer file",
        "Header (hex)": "30 00 00 00 4C 66 4C 65",
        "File extension": "EVT",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GEnealogical Data COMmunication (GEDCOM) file",
        "Header (hex)": "30 20 48 45 41 44",
        "File extension": "GED",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Media Audio-Video File",
        "Header (hex)": "30 26 B2 75 8E 66 CF 11",
        "File extension": "ASF|WMA|WMV",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "National Transfer Format Map",
        "Header (hex)": "30 31 4F 52 44 4E 41 4E",
        "File extension": "NTF",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "cpio archive",
        "Header (hex)": "30 37 30 37 30",
        "File extension": "(none)",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Write file_1",
        "Header (hex)": "31 BE",
        "File extension": "WRI",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Write file_2",
        "Header (hex)": "32 BE",
        "File extension": "WRI",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Pfaff Home Embroidery",
        "Header (hex)": "32 03 10 00 00 00 00 00 00 00 80 00 00 00 FF 00",
        "File extension": "PCS",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Tcpdump capture file",
        "Header (hex)": "34 CD B2 A1",
        "File extension": "(none)",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "7-Zip compressed file",
        "Header (hex)": "37 7A BC AF 27 1C",
        "File extension": "7Z",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "zisofs compressed file",
        "Header (hex)": "37 E4 53 96 C9 DB D6 07",
        "File extension": "(none)",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Photoshop image",
        "Header (hex)": "38 42 50 53",
        "File extension": "PSD",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Surfplan kite project file",
        "Header (hex)": "3A 56 45 52 53 49 4F 4E",
        "File extension": "SLE",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Advanced Stream Redirector",
        "Header (hex)": "3C",
        "File extension": "ASX",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BizTalk XML-Data Reduced Schema",
        "Header (hex)": "3C",
        "File extension": "XDR",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL HTML mail",
        "Header (hex)": "3C 21 64 6F 63 74 79 70",
        "File extension": "DCI",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Script Component",
        "Header (hex)": "3C 3F",
        "File extension": "WSC",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Visual Stylesheet",
        "Header (hex)": "3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D",
        "File extension": "MANIFEST",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "User Interface Language",
        "Header (hex)": "3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 3F 3E",
        "File extension": "XML",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MMC Snap-in Control file",
        "Header (hex)": "3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 3F 3E 0D 0A 3C 4D 4D 43 5F 43 6F 6E 73 6F 6C 65 46 69 6C 65 20 43 6F 6E 73 6F 6C 65 56 65 72 73 69 6F 6E 3D 22",
        "File extension": "MSC",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Picasa movie project file",
        "Header (hex)": "3C 43 54 72 61 6E 73 54 69 6D 65 6C 69 6E 65 3E",
        "File extension": "MXF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Csound music",
        "Header (hex)": "3C 43 73 6F 75 6E 64 53 79 6E 74 68 65 73 69 7A",
        "File extension": "CSD",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Earth Keyhole Overlay file",
        "Header (hex)": "3C 4B 65 79 68 6F 6C 65 3E",
        "File extension": "ETA",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Adobe FrameMaker",
        "Header (hex)": "3C 4D 61 6B 65 72 46 69",
        "File extension": "FM|MIF",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GPS Exchange (v1.1)",
        "Header (hex)": "3C 67 70 78 20 76 65 72 73 69 6F 6E 3D 22 31 2E",
        "File extension": "GPX",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BASE85 file",
        "Header (hex)": "3C 7E 36 3C 5C 25 5F 30 67 53 71 68 3B",
        "File extension": "B85",
        "FileClass": "Word processing",
        "Header offset": "0",
        "Trailer (hex)": "7E 3E 0A"
        },
        {
        "File description": "Quatro Pro for Windows 7.0",
        "Header (hex)": "3E 00 03 00 FE FF 09 00 06",
        "File extension": "WB3",
        "FileClass": "Spreadsheet",
        "Header offset": "24",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Help file_2",
        "Header (hex)": "3F 5F 03 00",
        "File extension": "GID|HLP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EndNote Library File",
        "Header (hex)": "40 40 40 20 00 00 40 40 40 40",
        "File extension": "ENL",
        "FileClass": "Miscellaneous",
        "Header offset": "32",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Analog Box (ABox) circuit files",
        "Header (hex)": "41 42 6F 78",
        "File extension": "ABOX2",
        "FileClass": "Audio",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Generic AutoCAD drawing",
        "Header (hex)": "41 43 31 30",
        "File extension": "DWG",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Steganos virtual secure drive",
        "Header (hex)": "41 43 76",
        "File extension": "SLE",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL parameter-info files",
        "Header (hex)": "41 43 53 44",
        "File extension": "(none)",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Harvard Graphics symbol graphic",
        "Header (hex)": "41 4D 59 4F",
        "File extension": "SYW",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL config files",
        "Header (hex)": "41 4F 4C",
        "File extension": "ABI|ABY|BAG|IDX|IND|PFC",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL and AIM buddy list",
        "Header (hex)": "41 4F 4C 20 46 65 65 64",
        "File extension": "BAG",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL address book",
        "Header (hex)": "41 4F 4C 44 42",
        "File extension": "ABY",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL user configuration",
        "Header (hex)": "41 4F 4C 44 42",
        "File extension": "IDX",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL client preferences-settings file",
        "Header (hex)": "41 4F 4C 49 44 58",
        "File extension": "IND",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL address book index",
        "Header (hex)": "41 4F 4C 49 4E 44 45 58",
        "File extension": "ABI",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL personal file cabinet",
        "Header (hex)": "41 4F 4C 56 4D 31 30 30",
        "File extension": "ORG|PFC",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AVG6 Integrity database",
        "Header (hex)": "41 56 47 36 5F 49 6E 74",
        "File extension": "DAT",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RIFF Windows Audio",
        "Header (hex)": "41 56 49 20 4C 49 53 54",
        "File extension": "AVI",
        "FileClass": "Multimedia",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "FreeArc compressed file",
        "Header (hex)": "41 72 43 01",
        "File extension": "ARC",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NTFS MFT (BAAD)",
        "Header (hex)": "42 41 41 44",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Chrome dictionary file",
        "Header (hex)": "42 44 69 63",
        "File extension": "BDIC",
        "FileClass": "System",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "vCard",
        "Header (hex)": "42 45 47 49 4E 3A 56 43",
        "File extension": "VCF",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Speedtouch router firmware",
        "Header (hex)": "42 4C 49 32 32 33",
        "File extension": "BIN|BLI|RBI",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Bitmap image",
        "Header (hex)": "42 4D",
        "File extension": "BMP|DIB",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Palmpilot resource file",
        "Header (hex)": "42 4F 4F 4B 4D 4F 42 49",
        "File extension": "PRC",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Better Portable Graphics",
        "Header (hex)": "42 50 47 FB",
        "File extension": "BPG",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "bzip2 compressed archive",
        "Header (hex)": "42 5A 68",
        "File extension": "BZ2|TAR|BZ2|TBZ2|TB2",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Mac Disk image (BZ2 compressed)",
        "Header (hex)": "42 5A 68",
        "File extension": "DMG",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Puffer ASCII encrypted archive",
        "Header (hex)": "42 65 67 69 6E 20 50 75 66 66 65 72",
        "File extension": "APUF",
        "FileClass": "Encryption",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Blink compressed archive",
        "Header (hex)": "42 6C 69 6E 6B",
        "File extension": "BLI",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RagTime document",
        "Header (hex)": "43 23 2B 44 A4 43 4D A5",
        "File extension": "RTD",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EA Interchange Format File (IFF)_3",
        "Header (hex)": "43 41 54 20",
        "File extension": "IFF",
        "FileClass": "Multimedia",
        "Header offset": "0(null)",
        "Trailer (hex)": ""
        },
        {
        "File description": "WordPerfect dictionary",
        "Header (hex)": "43 42 46 49 4C 45",
        "File extension": "CBD",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ISO-9660 CD Disc Image",
        "Header (hex)": "43 44 30 30 31",
        "File extension": "ISO",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RIFF CD audio",
        "Header (hex)": "43 44 44 41 66 6D 74 20",
        "File extension": "CDA",
        "FileClass": "Multimedia",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compressed ISO CD image",
        "Header (hex)": "43 49 53 4F",
        "File extension": "CSO",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows 7 thumbnail",
        "Header (hex)": "43 4D 4D 4D 15 00 00 00",
        "File extension": "DB",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Corel Binary metafile",
        "Header (hex)": "43 4D 58 31",
        "File extension": "CLB",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "COM+ Catalog",
        "Header (hex)": "43 4F 4D 2B",
        "File extension": "CLB",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VMware 3 Virtual Disk",
        "Header (hex)": "43 4F 57 44",
        "File extension": "VMDK",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Corel Photopaint file_1",
        "Header (hex)": "43 50 54 37 46 49 4C 45",
        "File extension": "CPT",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Corel Photopaint file_2",
        "Header (hex)": "43 50 54 46 49 4C 45",
        "File extension": "CPT",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Win9x registry hive",
        "Header (hex)": "43 52 45 47",
        "File extension": "DAT",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Crush compressed archive",
        "Header (hex)": "43 52 55 53 48 20 76",
        "File extension": "CRU",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Shockwave Flash file",
        "Header (hex)": "43 57 53",
        "File extension": "SWF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Calculux Indoor lighting project file",
        "Header (hex)": "43 61 6C 63 75 6C 75 78 20 49 6E 64 6F 6F 72 20",
        "File extension": "CIN",
        "FileClass": "Application",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WhereIsIt Catalog",
        "Header (hex)": "43 61 74 61 6C 6F 67 20",
        "File extension": "CTF",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "IE History file",
        "Header (hex)": "43 6C 69 65 6E 74 20 55",
        "File extension": "DAT",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Chrome Extension",
        "Header (hex)": "43 72 32 34",
        "File extension": "CRX",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Chromium patch update",
        "Header (hex)": "43 72 4F 44",
        "File extension": "CRX",
        "FileClass": "System",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Creative Voice",
        "Header (hex)": "43 72 65 61 74 69 76 65 20 56 6F 69 63 65 20 46",
        "File extension": "VOC",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerISO Direct-Access-Archive image",
        "Header (hex)": "44 41 41 00 00 00 00 00",
        "File extension": "DAA",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DAX Compressed CD image",
        "Header (hex)": "44 41 58 00",
        "File extension": "DAX",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Palm Zire photo database",
        "Header (hex)": "44 42 46 48",
        "File extension": "DB",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Amiga DiskMasher compressed archive",
        "Header (hex)": "44 4D 53 21",
        "File extension": "DMS",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Amiga disk file",
        "Header (hex)": "44 4F 53",
        "File extension": "ADF",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DST Compression",
        "Header (hex)": "44 53 54 62",
        "File extension": "DST",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DVR-Studio stream file",
        "Header (hex)": "44 56 44",
        "File extension": "DVR",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DVD info file",
        "Header (hex)": "44 56 44",
        "File extension": "IFO",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Elite Plus Commander game file",
        "Header (hex)": "45 4C 49 54 45 20 43 6F",
        "File extension": "CDR",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VideoVCD-VCDImager file",
        "Header (hex)": "45 4E 54 52 59 56 43 44",
        "File extension": "VCD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Apple ISO 9660-HFS hybrid CD image",
        "Header (hex)": "45 52 02 00 00",
        "File extension": "ISO",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EasyRecovery Saved State file",
        "Header (hex)": "45 52 46 53 53 41 56 45",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DSD Storage Facility audio file",
        "Header (hex)": "44 53 44 20",
        "File extension": "DSF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Document Imaging file",
        "Header (hex)": "45 50",
        "File extension": "MDI",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Expert Witness Compression Format",
        "Header (hex)": "45 56 46 09 0D 0A FF 00",
        "File extension": "E01",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EnCase Evidence File Format V2",
        "Header (hex)": "45 56 46 32 0D 0A 81",
        "File extension": "Ex01",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Vista event log",
        "Header (hex)": "45 6C 66 46 69 6C 65 00",
        "File extension": "EVTX",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickBooks backup",
        "Header (hex)": "45 86 00 00 06 00",
        "File extension": "QBB",
        "FileClass": "Finance",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Fax Cover Sheet",
        "Header (hex)": "46 41 58 43 4F 56 45 52",
        "File extension": "CPE",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Fiasco database definition file",
        "Header (hex)": "46 44 42 48 00",
        "File extension": "FDB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NTFS MFT (FILE)",
        "Header (hex)": "46 49 4C 45",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Flash video file",
        "Header (hex)": "46 4C 56",
        "File extension": "FLV",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "IFF ANIM file",
        "Header (hex)": "46 4F 52 4D",
        "File extension": "ANM",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EA Interchange Format File (IFF)_1",
        "Header (hex)": "46 4F 52 4D",
        "File extension": "IFF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Audio Interchange File",
        "Header (hex)": "46 4F 52 4D 00",
        "File extension": "AIFF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DAKX Compressed Audio",
        "Header (hex)": "46 4F 52 4D 00",
        "File extension": "DAX",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Shockwave Flash player",
        "Header (hex)": "46 57 53",
        "File extension": "SWF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Generic e-mail_2",
        "Header (hex)": "46 72 6F 6D",
        "File extension": "EML",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GIF file",
        "Header (hex)": "47 49 46 38",
        "File extension": "GIF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "00 3B"
        },
        {
        "File description": "GIMP pattern file",
        "Header (hex)": "47 50 41 54",
        "File extension": "PAT",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "General Regularly-distributed Information (GRIdded) Binary",
        "Header (hex)": "47 52 49 42",
        "File extension": "GRB",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Show Partner graphics file",
        "Header (hex)": "47 58 32",
        "File extension": "GX2",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Genetec video archive",
        "Header (hex)": "47 65 6E 65 74 65 63 20 4F 6D 6E 69 63 61 73 74",
        "File extension": "G64",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SAP PowerBuilder integrated development environment file",
        "Header (hex)": "48 44 52 2A 50 6F 77 65 72 42 75 69 6C 64 65 72",
        "File extension": "PBD",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SAS Transport dataset",
        "Header (hex)": "48 45 41 44 45 52 20 52 45 43 4F 52 44 2A 2A 2A",
        "File extension": "XPT",
        "FileClass": "Statistics",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Harvard Graphics presentation file",
        "Header (hex)": "48 48 47 42 31",
        "File extension": "SH3",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TIFF file_1",
        "Header (hex)": "49 20 49",
        "File extension": "TIF|TIFF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MP3 audio file",
        "Header (hex)": "49 44 33",
        "File extension": "MP3",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Sprint Music Store audio",
        "Header (hex)": "49 44 33 03 00 00 00",
        "File extension": "KOZ",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Canon RAW file",
        "Header (hex)": "49 49 1A 00 00 00 48 45",
        "File extension": "CRW",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TIFF file_2",
        "Header (hex)": "49 49 2A 00",
        "File extension": "TIF|TIFF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows 7 thumbnail_2",
        "Header (hex)": "49 4D 4D 4D 15 00 00 00",
        "File extension": "DB",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Install Shield compressed file",
        "Header (hex)": "49 53 63 28",
        "File extension": "CAB|HDR",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Reader eBook",
        "Header (hex)": "49 54 4F 4C 49 54 4C 53",
        "File extension": "LIT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Compiled HTML Help File",
        "Header (hex)": "49 54 53 46",
        "File extension": "CHI|CHM",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Inno Setup Uninstall Log",
        "Header (hex)": "49 6E 6E 6F 20 53 65 74",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Inter@ctive Pager Backup (BlackBerry file",
        "Header (hex)": "49 6E 74 65 72 40 63 74 69 76 65 20 50 61 67 65",
        "File extension": "IPD",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "JARCS compressed archive",
        "Header (hex)": "4A 41 52 43 53 00",
        "File extension": "JAR",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL ART file_1",
        "Header (hex)": "4A 47 03 0E",
        "File extension": "JG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "D0 CB 00 00"
        },
        {
        "File description": "AOL ART file_2",
        "Header (hex)": "4A 47 04 0E",
        "File extension": "JG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "CF C7 CB"
        },
        {
        "File description": "VMware 4 Virtual Disk",
        "Header (hex)": "4B 44 4D",
        "File extension": "VMDK",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "KGB archive",
        "Header (hex)": "4B 47 42 5F 61 72 63 68",
        "File extension": "KGB",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Win9x printer spool file",
        "Header (hex)": "4B 49 00 00",
        "File extension": "SHD",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "KWAJ (compressed) file",
        "Header (hex)": "4B 57 41 4A 88 F0 27 D1",
        "File extension": "(none)",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows shortcut file",
        "Header (hex)": "4C 00 00 00 01 14 02 00",
        "File extension": "LNK",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS COFF relocatable object code",
        "Header (hex)": "4C 01",
        "File extension": "OBJ",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Tajima emboridery",
        "Header (hex)": "4C 41 3A",
        "File extension": "DST",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows help file_3",
        "Header (hex)": "4C 4E 02 00",
        "File extension": "GID|HLP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EA Interchange Format File (IFF)_2",
        "Header (hex)": "4C 49 53 54",
        "File extension": "IFF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DeluxePaint Animation",
        "Header (hex)": "4C 50 46 20 00 01",
        "File extension": "ANM",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Logical File Evidence Format",
        "Header (hex)": "4C 56 46 09 0D 0A FF 00",
        "File extension": "E01",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Merriam-Webster Pocket Dictionary",
        "Header (hex)": "4D 2D 57 20 50 6F 63 6B",
        "File extension": "PDB",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Mozilla archive",
        "Header (hex)": "4D 41 52 31 00",
        "File extension": "MAR",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft-MSN MARC archive",
        "Header (hex)": "4D 41 52 43",
        "File extension": "MAR",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MATLAB v5 workspace",
        "Header (hex)": "4D 41 54 4C 41 42 20 35 2E 30 20 4D 41 54 2D 66 69 6C 65",
        "File extension": "MAT",
        "FileClass": "Programming",
        "Header offset": "0(null)",
        "Trailer (hex)": ""
        },
        {
        "File description": "MAr compressed archive",
        "Header (hex)": "4D 41 72 30 00",
        "File extension": "MAR",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TargetExpress target file",
        "Header (hex)": "4D 43 57 20 54 65 63 68 6E 6F 67 6F 6C 69 65 73",
        "File extension": "MTE",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows dump file",
        "Header (hex)": "4D 44 4D 50 93 A7",
        "File extension": "DMP|HDMP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Milestones project management file",
        "Header (hex)": "4D 49 4C 45 53",
        "File extension": "MLS",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Skype localization data file",
        "Header (hex)": "4D 4C 53 57",
        "File extension": "MLS",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TIFF file_3",
        "Header (hex)": "4D 4D 00 2A",
        "File extension": "TIF|TIFF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TIFF file_4",
        "Header (hex)": "4D 4D 00 2B",
        "File extension": "TIF|TIFF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Yamaha Synthetic music Mobile Application Format",
        "Header (hex)": "4D 4D 4D 44 00 00",
        "File extension": "MMF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VMware BIOS state file",
        "Header (hex)": "4D 52 56 4E",
        "File extension": "NVRAM",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft cabinet file",
        "Header (hex)": "4D 53 43 46",
        "File extension": "CAB",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OneNote Package",
        "Header (hex)": "4D 53 43 46",
        "File extension": "ONEPKG",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Powerpoint Packaged Presentation",
        "Header (hex)": "4D 53 43 46",
        "File extension": "PPZ",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Access Snapshot Viewer file",
        "Header (hex)": "4D 53 43 46",
        "File extension": "SNP",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OLE-SPSS-Visual C++ library file",
        "Header (hex)": "4D 53 46 54 02 00 01 00",
        "File extension": "TLB",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Health Level-7 data (pipe delimited) file",
        "Header (hex)": "D 53 48 7C 5E 7E 5C 26 7C",
        "File extension": "HL7",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Windows Imaging Format",
        "Header (hex)": "4D 53 57 49 4D",
        "File extension": "WIM",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Sony Compressed Voice File",
        "Header (hex)": "4D 53 5F 56 4F 49 43 45",
        "File extension": "CDR|DVF|MSV",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MIDI sound file",
        "Header (hex)": "4D 54 68 64",
        "File extension": "MID|MIDI",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Yamaha Piano",
        "Header (hex)": "4D 54 68 64",
        "File extension": "PCS",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "CD Stomper Pro label file",
        "Header (hex)": "4D 56",
        "File extension": "DSN",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Milestones project management file_1",
        "Header (hex)": "4D 56 32 31 34",
        "File extension": "MLS",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Milestones project management file_2",
        "Header (hex)": "4D 56 32 43",
        "File extension": "MLS",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows-DOS executable file",
        "Header (hex)": "4D 5A",
        "File extension": "COM|DLL|DRV|EXE|PIF|QTS|QTX|SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS audio compression manager driver",
        "Header (hex)": "4D 5A",
        "File extension": "ACM",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Library cache file",
        "Header (hex)": "4D 5A",
        "File extension": "AX",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Control panel application",
        "Header (hex)": "4D 5A",
        "File extension": "CPL",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Font file",
        "Header (hex)": "4D 5A",
        "File extension": "FON",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ActiveX-OLE Custom Control",
        "Header (hex)": "4D 5A",
        "File extension": "OCX",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OLE object library",
        "Header (hex)": "4D 5A",
        "File extension": "OLB",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Screen saver",
        "Header (hex)": "4D 5A",
        "File extension": "SCR",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VisualBASIC application",
        "Header (hex)": "4D 5A",
        "File extension": "VBX",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows virtual device drivers",
        "Header (hex)": "4D 5A",
        "File extension": "VXD|386",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Acrobat plug-in",
        "Header (hex)": "4D 5A 90 00 03 00 00 00",
        "File extension": "API",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DirectShow filter",
        "Header (hex)": "4D 5A 90 00 03 00 00 00",
        "File extension": "AX",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Audition graphic filter",
        "Header (hex)": "4D 5A 90 00 03 00 00 00",
        "File extension": "FLT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZoneAlam data file",
        "Header (hex)": "4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF",
        "File extension": "ZAP",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS C++ debugging symbols file",
        "Header (hex)": "4D 69 63 72 6F 73 6F 66 74 20 43 2F 43 2B 2B 20",
        "File extension": "PDB",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visual Studio .NET file",
        "Header (hex)": "4D 69 63 72 6F 73 6F 66 74 20 56 69 73 75 61 6C",
        "File extension": "SLN",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Media Player playlist",
        "Header (hex)": "4D 69 63 72 6F 73 6F 66 74 20 57 69 6E 64 6F 77 73 20 4D 65 64 69 61 20 50 6C 61 79 65 72 20 2D 2D 20",
        "File extension": "WPL",
        "FileClass": "Multimedia",
        "Header offset": "84",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VMapSource GPS Waypoint Database",
        "Header (hex)": "4D 73 52 63 66",
        "File extension": "GDB",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TomTom traffic data",
        "Header (hex)": "4E 41 56 54 52 41 46 46",
        "File extension": "DAT",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Windows journal",
        "Header (hex)": "4E 42 2A 00",
        "File extension": "JNT|JTP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NES Sound file",
        "Header (hex)": "4E 45 53 4D 1A 01",
        "File extension": "NSF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "National Imagery Transmission Format file",
        "Header (hex)": "4E 49 54 46 30",
        "File extension": "NTF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Agent newsreader character map",
        "Header (hex)": "4E 61 6D 65 3A 20",
        "File extension": "COD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "1Password 4 Cloud Keychain",
        "Header (hex)": "4F 50 43 4C 44 41 54",
        "File extension": "attachment",
        "FileClass": "Encryption",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Psion Series 3 Database",
        "Header (hex)": "4F 50 4C 44 61 74 61 62",
        "File extension": "DBF",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OpenType font",
        "Header (hex)": "4F 54 54 4F 00",
        "File extension": "OTF",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Ogg Vorbis Codec compressed file",
        "Header (hex)": "4F 67 67 53 00 02 00 00",
        "File extension": "OGA|OGG|OGV|OGX",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visio-DisplayWrite 4 text file",
        "Header (hex)": "4F 7B",
        "File extension": "DW4",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quicken QuickFinder Information File",
        "Header (hex)": "50 00 00 00 20 00 00 00",
        "File extension": "IDX",
        "FileClass": "Finance",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Portable Graymap Graphic",
        "Header (hex)": "50 35 0A",
        "File extension": "PGM",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quake archive file",
        "Header (hex)": "50 41 43 4B",
        "File extension": "PAK",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows memory dump",
        "Header (hex)": "50 41 47 45 44 55",
        "File extension": "DMP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PAX password protected bitmap",
        "Header (hex)": "50 41 58",
        "File extension": "PAX",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PestPatrol data-scan strings",
        "Header (hex)": "50 45 53 54",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PGP disk image",
        "Header (hex)": "50 47 50 64 4D 41 49 4E",
        "File extension": "PGD",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ChromaGraph Graphics Card Bitmap",
        "Header (hex)": "50 49 43 54 00 08",
        "File extension": "IMG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PKZIP archive_1",
        "Header (hex)": "50 4B 03 04",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "50 4B ????????????????? 00 00 00"
        },
        {
        "File description": "Android package",
        "Header (hex)": "50 4B 03 04",
        "File extension": "APK",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MacOS X Dashboard Widget",
        "Header (hex)": "50 4B 03 04",
        "File extension": "ZIP",
        "FileClass": "MacOS",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Office Open XML Format Document",
        "Header (hex)": "50 4B 03 04",
        "File extension": "DOCX|PPTX|XLSX",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Java archive_1",
        "Header (hex)": "50 4B 03 04",
        "File extension": "JAR",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Earth session file",
        "Header (hex)": "50 4B 03 04",
        "File extension": "KMZ",
        "FileClass": "Navigation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "KWord document",
        "Header (hex)": "50 4B 03 04",
        "File extension": "KWD",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OpenDocument template",
        "Header (hex)": "50 4B 03 04",
        "File extension": "ODT|ODP|OTT",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Open XML paper specification",
        "Header (hex)": "50 4B 03 04",
        "File extension": "OXPS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OpenOffice documents",
        "Header (hex)": "50 4B 03 04",
        "File extension": "SXC|SXD|SXI|SXW",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "StarOffice spreadsheet",
        "Header (hex)": "50 4B 03 04",
        "File extension": "SXC",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Media compressed skin file",
        "Header (hex)": "50 4B 03 04",
        "File extension": "WMZ",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Mozilla Browser Archive",
        "Header (hex)": "50 4B 03 04",
        "File extension": "XPI",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "XML paper specification file",
        "Header (hex)": "50 4B 03 04",
        "File extension": "XPS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "eXact Packager Models",
        "Header (hex)": "50 4B 03 04",
        "File extension": "XPT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Open Publication Structure eBook",
        "Header (hex)": "50 4B 03 04 0A 00 02 00",
        "File extension": "EPUB",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZLock Pro encrypted ZIP",
        "Header (hex)": "50 4B 03 04 14 00 01 00",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Office 2007 documents",
        "Header (hex)": "50 4B 03 04 14 00 06 00",
        "File extension": "DOCX|PPTX|XLSX",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Java archive_2",
        "Header (hex)": "50 4B 03 04 14 00 08 00",
        "File extension": "JAR",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PKZIP archive_2",
        "Header (hex)": "50 4B 05 06",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PKZIP archive_3",
        "Header (hex)": "50 4B 07 08",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PKLITE archive",
        "Header (hex)": "50 4B 4C 49 54 45",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "30",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PKSFX self-extracting archive",
        "Header (hex)": "50 4B 53 70 58",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "526",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Program Manager group file",
        "Header (hex)": "50 4D 43 43",
        "File extension": "GRP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Norton Disk Doctor undo file",
        "Header (hex)": "50 4E 43 49 55 4E 44 4F",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Windows User State Migration Tool",
        "Header (hex)": "50 4D 4F 43 43 4D 4F 43",
        "File extension": "PMOCCMOC",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Dreamcast Sound Format",
        "Header (hex)": "50 53 46 12",
        "File extension": "DSF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Puffer encrypted archive",
        "Header (hex)": "50 55 46 58",
        "File extension": "PUF",
        "FileClass": "Encryption",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Parrot Video Encapsulation",
        "Header (hex)": "50 61 56 45",
        "File extension": "(none)",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quicken data",
        "Header (hex)": "51 45 4C 20",
        "File extension": "QEL",
        "FileClass": "Finance",
        "Header offset": "92",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Qcow Disk Image",
        "Header (hex)": "51 46 49",
        "File extension": "QEMU",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RIFF Qualcomm PureVoice",
        "Header (hex)": "51 4C 43 4D 66 6D 74 20",
        "File extension": "QCP",
        "FileClass": "Multimedia",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quicken data file",
        "Header (hex)": "51 57 20 56 65 72 2E 20",
        "File extension": "ABD|QSD",
        "FileClass": "Finance",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Outlook-Exchange message subheader",
        "Header (hex)": "52 00 6F 00 6F 00 74 00 20 00 45 00 6E 00 74 00 72 00 79 00",
        "File extension": "MSG",
        "FileClass": "Email",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Shareaza (P2P) thumbnail",
        "Header (hex)": "52 41 5A 41 54 44 42 31",
        "File extension": "DAT",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "R saved work space",
        "Header (hex)": "52 44 58 32 0A",
        "File extension": "RDATA",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinNT Registry-Registry Undo files",
        "Header (hex)": "52 45 47 45 44 49 54",
        "File extension": "REG|SUD",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Antenna data file",
        "Header (hex)": "52 45 56 4E 55 4D 3A 2C",
        "File extension": "AD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows animated cursor",
        "Header (hex)": "52 49 46 46",
        "File extension": "ANI",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Corel Presentation Exchange metadata",
        "Header (hex)": "52 49 46 46",
        "File extension": "CMX",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "CorelDraw document",
        "Header (hex)": "52 49 46 46",
        "File extension": "CDR",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Video CD MPEG movie",
        "Header (hex)": "52 49 46 46",
        "File extension": "DAT",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Micrografx Designer graphic",
        "Header (hex)": "52 49 46 46",
        "File extension": "DS4",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "4X Movie video",
        "Header (hex)": "52 49 46 46",
        "File extension": "4XM",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Resource Interchange File Format",
        "Header (hex)": "52 49 46 46",
        "File extension": "AVI|CDA|QCP|RMI|WAV|WEBP",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RIFF Windows MIDI",
        "Header (hex)": "52 4D 49 44 64 61 74 61",
        "File extension": "RMI",
        "FileClass": "Multimedia",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinNT Netmon capture file",
        "Header (hex)": "52 54 53 53",
        "File extension": "CAP",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinRAR compressed archive",
        "Header (hex)": "52 61 72 21 1A 07 00",
        "File extension": "RAR",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Generic e-mail_1",
        "Header (hex)": "52 65 74 75 72 6E 2D 50",
        "File extension": "EML",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows prefetch",
        "Header (hex)": "53 43 43 41",
        "File extension": "PF",
        "FileClass": "Windows",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Underground Audio",
        "Header (hex)": "53 43 48 6C",
        "File extension": "AST",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Img Software Bitmap",
        "Header (hex)": "53 43 4D 49",
        "File extension": "IMG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SMPTE DPX (big endian)",
        "Header (hex)": "53 44 50 58",
        "File extension": "SDPX",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Harvard Graphics presentation",
        "Header (hex)": "53 48 4F 57",
        "File extension": "SHW",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Sietronics CPI XRD document",
        "Header (hex)": "53 49 45 54 52 4F 4E 49",
        "File extension": "CPI",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Flexible Image Transport System (FITS) file",
        "Header (hex)": "53 49 4D 50 4C 45 20 20 3D 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 54",
        "File extension": "FITS",
        "FileClass": "multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "StuffIt archive",
        "Header (hex)": "53 49 54 21 00",
        "File extension": "SIT",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SmartDraw Drawing file",
        "Header (hex)": "53 4D 41 52 54 44 52 57",
        "File extension": "SDR",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "StorageCraft ShadownProtect backup file",
        "Header (hex)": "53 50 46 49 00",
        "File extension": "SPF",
        "FileClass": "Backup",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MultiBit Bitcoin blockchain file",
        "Header (hex)": "53 50 56 42",
        "File extension": "SPVB",
        "FileClass": "e-money",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SQLite database file",
        "Header (hex)": "53 51 4C 69 74 65 20 66 6F 72 6D 61 74 20 33 00",
        "File extension": "DB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DB2 conversion file",
        "Header (hex)": "53 51 4C 4F 43 4F 4E 56",
        "File extension": "CNV",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QBASIC SZDD file",
        "Header (hex)": "53 5A 20 88 F0 27 33 D1",
        "File extension": "(none)",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SZDD file format",
        "Header (hex)": "53 5A 44 44 88 F0 27 33",
        "File extension": "(none)",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "StuffIt compressed archive",
        "Header (hex)": "53 74 75 66 66 49 74 20",
        "File extension": "SIT",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SuperCalc worksheet",
        "Header (hex)": "53 75 70 65 72 43 61 6C",
        "File extension": "CAL",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Wii-GameCube",
        "Header (hex)": "54 48 50 00",
        "File extension": "THP",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GNU Info Reader file",
        "Header (hex)": "54 68 69 73 20 69 73 20",
        "File extension": "INFO",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Unicode extensions",
        "Header (hex)": "55 43 45 58",
        "File extension": "UCE",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UFA compressed archive",
        "Header (hex)": "55 46 41 C6 D2 C1",
        "File extension": "UFA",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UFO Capture map file",
        "Header (hex)": "55 46 4F 4F 72 62 69 74",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Measurement Data Format file",
        "Header (hex)": "55 6E 46 69 6E 4D 46",
        "File extension": "MF4",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visual C PreCompiled header",
        "Header (hex)": "56 43 50 43 48 30",
        "File extension": "PCH",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visual Basic User-defined Control file",
        "Header (hex)": "56 45 52 53 49 4F 4E 20",
        "File extension": "CTL",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MapInfo Interchange Format file",
        "Header (hex)": "56 65 72 73 69 6F 6E 20",
        "File extension": "MIF",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SPSS template",
        "Header (hex)": "57 04 00 00 53 50 53 53 20 74 65 6D 70 6C 61 74",
        "File extension": "SCT",
        "FileClass": "Statistics",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RIFF Windows Audio",
        "Header (hex)": "57 41 56 45 66 6D 74 20",
        "File extension": "WAV",
        "FileClass": "Multimedia",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RIFF WebP",
        "Header (hex)": "57 45 42 50",
        "File extension": "WEBP",
        "FileClass": "Multimedia",
        "Header offset": "8",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Walkman MP3 file",
        "Header (hex)": "57 4D 4D 50",
        "File extension": "DAT",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WordStar for Windows file",
        "Header (hex)": "57 53 32 30 30 30",
        "File extension": "WS2",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinZip compressed archive",
        "Header (hex)": "57 69 6E 5A 69 70",
        "File extension": "ZIP",
        "FileClass": "Compressed archive",
        "Header offset": "29152",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus WordPro file",
        "Header (hex)": "57 6F 72 64 50 72 6F",
        "File extension": "LWP",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Exchange e-mail",
        "Header (hex)": "58 2D",
        "File extension": "EML",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Packet sniffer files",
        "Header (hex)": "58 43 50 00",
        "File extension": "CAP",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "XPCOM libraries",
        "Header (hex)": "58 50 43 4F 4D 0A 54 79",
        "File extension": "XPT",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SMPTE DPX file (little endian)",
        "Header (hex)": "58 50 44 53",
        "File extension": "DPX",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Publisher",
        "Header (hex)": "58 54",
        "File extension": "BDR",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZOO compressed archive",
        "Header (hex)": "5A 4F 4F 20",
        "File extension": "ZOO",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Macromedia Shockwave Flash",
        "Header (hex)": "5A 57 53",
        "File extension": "SWF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Exchange configuration file",
        "Header (hex)": "5B 47 65 6E 65 72 61 6C",
        "File extension": "ECF",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visual C++ Workbench Info File",
        "Header (hex)": "5B 4D 53 56 43",
        "File extension": "VCW",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Dial-up networking file",
        "Header (hex)": "5B 50 68 6F 6E 65 5D",
        "File extension": "DUN",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus AMI Pro document_1",
        "Header (hex)": "5B 56 45 52 5D",
        "File extension": "SAM",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "VocalTec VoIP media file",
        "Header (hex)": "5B 56 4D 44 5D",
        "File extension": "VMD",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Code Page Translation file",
        "Header (hex)": "5B 57 69 6E 64 6F 77 73",
        "File extension": "CPX",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Flight Simulator Aircraft Configuration",
        "Header (hex)": "5B 66 6C 74 73 69 6D 2E",
        "File extension": "CFG",
        "FileClass": "Games",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinAmp Playlist",
        "Header (hex)": "5B 70 6C 61 79 6C 69 73 74 5D",
        "File extension": "PLS",
        "FileClass": "Audio",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus AMI Pro document_2",
        "Header (hex)": "5B 76 65 72 5D",
        "File extension": "SAM",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Husqvarna Designer",
        "Header (hex)": "5D FC C8 00",
        "File extension": "HUS",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Jar archive",
        "Header (hex)": "5F 27 A8 89",
        "File extension": "JAR",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "EnCase case file",
        "Header (hex)": "5F 43 41 53 45 5F",
        "File extension": "CAS|CBK",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Compressed archive file",
        "Header (hex)": "60 EA",
        "File extension": "ARJ",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UUencoded file",
        "Header (hex)": "62 65 67 69 6E",
        "File extension": "(none)",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UUencoded BASE64 file",
        "Header (hex)": "62 65 67 69 6E 2D 62 61 73 65 36 34",
        "File extension": "b64",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "0A 3D 3D 3D 3D 0A"
        },
        {
        "File description": "Binary property list (plist)",
        "Header (hex)": "62 70 6C 69 73 74",
        "File extension": "(none)",
        "FileClass": "System",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Apple Core Audio File",
        "Header (hex)": "63 61 66 66",
        "File extension": "CAF",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Macintosh encrypted Disk image (v1)",
        "Header (hex)": "63 64 73 61 65 6E 63 72",
        "File extension": "DMG",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Virtual PC HD image",
        "Header (hex)": "63 6F 6E 65 63 74 69 78",
        "File extension": "VHD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Photoshop Custom Shape",
        "Header (hex)": "63 75 73 68 00 00 00 02",
        "File extension": "CSH",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Intel PROset-Wireless Profile",
        "Header (hex)": "64 00 00 00",
        "File extension": "P10",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Torrent file",
        "Header (hex)": "64 38 3A 61 6E 6E 6F 75 6E 63 65",
        "File extension": "TORRENT",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Dalvik (Android) executable file",
        "Header (hex)": "64 65 78 0A",
        "File extension": "dex",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Audacity audio file",
        "Header (hex)": "64 6E 73 2E",
        "File extension": "AU",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Visual Studio workspace file",
        "Header (hex)": "64 73 77 66 69 6C 65",
        "File extension": "DSW",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Macintosh encrypted Disk image (v2)",
        "Header (hex)": "65 6E 63 72 63 64 73 61",
        "File extension": "DMG",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinNT printer spool file",
        "Header (hex)": "66 49 00 00",
        "File extension": "SHD",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Free Lossless Audio Codec file",
        "Header (hex)": "66 4C 61 43 00 00 00 22",
        "File extension": "FLAC",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-4 video file_1",
        "Header (hex)": "66 74 79 70 33 67 70 35",
        "File extension": "MP4",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Apple Lossless Audio Codec file",
        "Header (hex)": "66 74 79 70 4D 34 41 20",
        "File extension": "M4A",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ISO Media-MPEG v4-iTunes AVC-LC",
        "Header (hex)": "66 74 79 70 4D 34 56 20",
        "File extension": "FLV|M4V",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-4 video file_2",
        "Header (hex)": "66 74 79 70 4D 53 4E 56",
        "File extension": "MP4",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ISO Base Media file (MPEG-4) v1",
        "Header (hex)": "66 74 79 70 69 73 6F 6D",
        "File extension": "MP4",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-4 video-QuickTime file",
        "Header (hex)": "66 74 79 70 6D 70 34 32",
        "File extension": "M4V",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_7",
        "Header (hex)": "66 74 79 70 71 74 20 20",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Win2000-XP printer spool file",
        "Header (hex)": "67 49 00 00",
        "File extension": "SHD",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GIMP file",
        "Header (hex)": "67 69 6d 70 20 78 63 66",
        "File extension": "XCF",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Win Server 2003 printer spool file",
        "Header (hex)": "68 49 00 00",
        "File extension": "SHD",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MacOS icon file",
        "Header (hex)": "69 63 6E 73",
        "File extension": "ICNS",
        "FileClass": "System",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Skype user data file",
        "Header (hex)": "6C 33 33 6C",
        "File extension": "DBB",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_1",
        "Header (hex)": "6D 6F 6F 76",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_2",
        "Header (hex)": "66 72 65 65",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_3",
        "Header (hex)": "6D 64 61 74",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_4",
        "Header (hex)": "77 69 64 65",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_5",
        "Header (hex)": "70 6E 6F 74",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickTime movie_6",
        "Header (hex)": "73 6B 69 70",
        "File extension": "MOV",
        "FileClass": "Multimedia",
        "Header offset": "4",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Internet Explorer v11 Tracking Protection List",
        "Header (hex)": "6D 73 46 69 6C 74 65 72 4C 69 73 74",
        "File extension": "TPL",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MultiBit Bitcoin wallet information",
        "Header (hex)": "6D 75 6C 74 69 42 69 74 2E 69 6E 66 6F",
        "File extension": "INFO",
        "FileClass": "E-money",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SMS text (SIM)",
        "Header (hex)": "6F 3C",
        "File extension": "(none)",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "1Password 4 Cloud Keychain encrypted data",
        "Header (hex)": "6F 70 64 61 74 61 30 31",
        "File extension": "(none)",
        "FileClass": "Encryption",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinNT registry file",
        "Header (hex)": "72 65 67 66",
        "File extension": "DAT",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Sonic Foundry Acid Music File",
        "Header (hex)": "72 69 66 66",
        "File extension": "AC",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RealMedia metafile",
        "Header (hex)": "72 74 73 70 3A 2F 2F",
        "File extension": "RAM",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Allegro Generic Packfile (compressed)",
        "Header (hex)": "73 6C 68 21",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Allegro Generic Packfile (uncompressed)",
        "Header (hex)": "73 6C 68 2E",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PalmOS SuperMemo",
        "Header (hex)": "73 6D 5F",
        "File extension": "PDB",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "STL (STereoLithography) file",
        "Header (hex)": "73 6F 6C 69 64",
        "File extension": "STL",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "CALS raster bitmap",
        "Header (hex)": "73 72 63 64 6F 63 69 64",
        "File extension": "CAL",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerBASIC Debugger Symbols",
        "Header (hex)": "73 7A 65 7A",
        "File extension": "PDB",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PathWay Map file",
        "Header (hex)": "74 42 4D 50 4B 6E 57 72",
        "File extension": "PRC",
        "FileClass": "Mobile",
        "Header offset": "60",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "TrueType font",
        "Header (hex)": "74 72 75 65 00",
        "File extension": "TTF",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Tape Archive",
        "Header (hex)": "75 73 74 61 72",
        "File extension": "TAR",
        "FileClass": "Compressed archive",
        "Header offset": "257",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OpenEXR bitmap image",
        "Header (hex)": "76 2F 31 01",
        "File extension": "EXR",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Qimage filter",
        "Header (hex)": "76 32 30 30 33 2E 31 30",
        "File extension": "FLT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Web Open Font Format 2",
        "Header (hex)": "77 4F 46 32",
        "File extension": "WOFF2",
        "FileClass": "Open font",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Web Open Font Format",
        "Header (hex)": "77 4F 46 46",
        "File extension": "WOFF",
        "FileClass": "Open font",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MacOS X image file",
        "Header (hex)": "78 01 73 0D 62 62 60",
        "File extension": "DMG",
        "FileClass": "MacOS",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "eXtensible ARchive file",
        "Header (hex)": "78 61 72 21",
        "File extension": "XAR",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ZoomBrowser Image Index",
        "Header (hex)": "7A 62 65 78",
        "File extension": "INFO",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows application log",
        "Header (hex)": "7B 0D 0A 6F 20",
        "File extension": "LGC|LGD",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Google Drive Drawing link",
        "Header (hex)": "7B 22 75 72 6C 22 3A 20 22 68 74 74 70 73 3A 2F",
        "File extension": "GDRAW",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS WinMobile personal note",
        "Header (hex)": "7B 5C 70 77 69",
        "File extension": "PWI",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Rich Text Format",
        "Header (hex)": "7B 5C 72 74 66 31",
        "File extension": "RTF",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "5C 70 61 72 20 7D 7D"
        },
        {
        "File description": "Huskygram Poem or Singer embroidery",
        "Header (hex)": "7C 4B C3 74 E1 C8 53 A4 79 B9 01 1D FC 4F DD 13",
        "File extension": "CSD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Corel Paint Shop Pro image",
        "Header (hex)": "7E 42 4B 00",
        "File extension": "PSP",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Easy Street Draw diagram file",
        "Header (hex)": "7E 45 53 44 77 F6 85 3E BF 6A D2 11 45 61 73 79 20 53 74 72 65 65 74 20 44 72 61 77",
        "File extension": "ESD",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Digital Watchdog DW-TP-500G audio",
        "Header (hex)": "7E 74 2C 01 50 70 02 4D 52",
        "File extension": "IMG",
        "FileClass": "Audio",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ELF executable",
        "Header (hex)": "7F 45 4C 46",
        "File extension": "(none)",
        "FileClass": "Linux-Unix",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Relocatable object code",
        "Header (hex)": "80",
        "File extension": "OBJ",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Dreamcast audio",
        "Header (hex)": "80 00 00 20 03 12 04",
        "File extension": "ADX",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Kodak Cineon image",
        "Header (hex)": "80 2A 5F D7",
        "File extension": "CIN",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Outlook Express address book (Win95)",
        "Header (hex)": "81 32 84 C1 85 05 D0 11",
        "File extension": "WAB",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WordPerfect text",
        "Header (hex)": "81 CD AB",
        "File extension": "WPF",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PNG image",
        "Header (hex)": "89 50 4E 47 0D 0A 1A 0A",
        "File extension": "PNG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "49 45 4E 44 AE 42 60 82"
        },
        {
        "File description": "MS Answer Wizard",
        "Header (hex)": "8A 01 09 00 00 00 E1 08",
        "File extension": "AW",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Hamarsoft compressed archive",
        "Header (hex)": "91 33 48 46",
        "File extension": "HAP",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PGP secret keyring_1",
        "Header (hex)": "95 00",
        "File extension": "SKR",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PGP secret keyring_2",
        "Header (hex)": "95 01",
        "File extension": "SKR",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "JBOG2 image file",
        "Header (hex)": "97 4A 42 32 0D 0A 1A 0A",
        "File extension": "JB2",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "03 33 00 01 00 00 00 00"
        },
        {
        "File description": "GPG public keyring",
        "Header (hex)": "99",
        "File extension": "GPG",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PGP public keyring",
        "Header (hex)": "99 01",
        "File extension": "PKR",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Outlook address file",
        "Header (hex)": "9C CB CB 8D 13 75 D2 11",
        "File extension": "WAB",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "tcpdump (libpcap) capture file",
        "Header (hex)": "A1 B2 C3 D4",
        "File extension": "(none)",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Extended tcpdump (libpcap) capture file",
        "Header (hex)": "A1 B2 CD 34",
        "File extension": "(none)",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Access Data FTK evidence",
        "Header (hex)": "A9 0D 00 00 00 00 00 00",
        "File extension": "DAT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Khronos texture file",
        "Header (hex)": "AB 4B 54 58 20 31 31 BB 0D 0A 1A 0A",
        "File extension": "KTX",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Quicken data",
        "Header (hex)": "AC 9E BD 8F 00 00",
        "File extension": "QDF",
        "FileClass": "Finance",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerPoint presentation subheader_3",
        "Header (hex)": "A0 46 1D F0",
        "File extension": "PPT",
        "FileClass": "Presentation",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Java serialization data",
        "Header (hex)": "AC ED",
        "File extension": "(none)",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BGBlitz position database file",
        "Header (hex)": "AC ED 00 05 73 72 00 12",
        "File extension": "PDB",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Win95 password file",
        "Header (hex)": "B0 4D 46 43",
        "File extension": "PWL",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PCX bitmap",
        "Header (hex)": "B1 68 DE 3A",
        "File extension": "DCX",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Acronis True Image_1",
        "Header (hex)": "B4 6E 68 44",
        "File extension": "TIB",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows calendar",
        "Header (hex)": "B5 A2 B0 B3 B3 B0 A5 B5",
        "File extension": "CAL",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "InstallShield Script",
        "Header (hex)": "B8 C9 0C 00",
        "File extension": "INS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Write file_3",
        "Header (hex)": "BE 00 00 00 AB",
        "File extension": "WRI",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Palm Desktop DateBook",
        "Header (hex)": "BE BA FE CA 0F 50 61 6C 6D 53 47 20 44 61 74 61",
        "File extension": "DAT",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Agent Character file",
        "Header (hex)": "C3 AB CD AB",
        "File extension": "ACS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Adobe encapsulated PostScript",
        "Header (hex)": "C5 D0 D3 C6",
        "File extension": "EPS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Jeppesen FliteLog file",
        "Header (hex)": "C8 00 79 00",
        "File extension": "LBK",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Java bytecode",
        "Header (hex)": "CA FE BA BE",
        "File extension": "CLASS",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Nokia phone backup file",
        "Header (hex)": "CC 52 33 FC E9 2C 18 48 AF E3 36 30 1A 39 40 06",
        "File extension": "NBU",
        "FileClass": "Mobile",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "NAV quarantined virus file",
        "Header (hex)": "CD 20 AA AA 02 00 00 00",
        "File extension": "(none)",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Acronis True Image_2",
        "Header (hex)": "CE 24 B9 A2 20 00 00 00",
        "File extension": "TIB",
        "FileClass": "Multimedia",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Java Cryptography Extension keystore",
        "Header (hex)": "CE CE CE CE",
        "File extension": "JCEKS",
        "FileClass": "Encryption",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OS X ABI Mach-O binary (32-bit reverse)",
        "Header (hex)": "CE FA ED FE",
        "File extension": "(none)",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Perfect Office document",
        "Header (hex)": "CF 11 E0 A1 B1 1A E1 00",
        "File extension": "DOC",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Outlook Express e-mail folder",
        "Header (hex)": "CF AD 12 FE",
        "File extension": "DBX",
        "FileClass": "Email",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OS X ABI Mach-O binary (64-bit reverse)",
        "Header (hex)": "CF FA ED FE",
        "File extension": "(none)",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Office document",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "DOC|DOT|PPS|PPT|XLA|XLS|WIZ",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "CaseWare Working Papers",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "AC_",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Access project file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "ADP",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Lotus-IBM Approach 97 file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "APR",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MSWorks database file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "DB",
        "FileClass": "Database",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Common Console Document",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "MSC",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Installer package",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "MSI",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Installer Patch",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "MSP",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Minitab data file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "MTW",
        "FileClass": "Statistics",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "ArcMap GIS project file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "MXD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Developer Studio File Options file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "OPT",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Publisher file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "PUB",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Revit Project file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "RVT",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visual Studio Solution User Options file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "SOU",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "SPSS output file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "SPO",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visio file",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "VSD",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MSWorks text document",
        "Header (hex)": "D0 CF 11 E0 A1 B1 1A E1",
        "File extension": "WPS",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinPharoah filter file",
        "Header (hex)": "D2 0A 00 00",
        "File extension": "FTR",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "AOL history|typed URL files",
        "Header (hex)": "D4 2A",
        "File extension": "ARL|AUT",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WinDump (winpcap) capture file",
        "Header (hex)": "D4 C3 B2 A1",
        "File extension": "(none)",
        "FileClass": "Network",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows graphics metafile",
        "Header (hex)": "D7 CD C6 9A",
        "File extension": "WMF",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Word 2.0 file",
        "Header (hex)": "DB A5 2D 00",
        "File extension": "DOC",
        "FileClass": "Word processing",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Corel color palette",
        "Header (hex)": "DC DC",
        "File extension": "CPL",
        "FileClass": "Presentation",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "eFax file",
        "Header (hex)": "DC FE",
        "File extension": "EFX",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Amiga icon",
        "Header (hex)": "E3 10 00 01 00 00 00 00",
        "File extension": "INFO",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Win98 password file",
        "Header (hex)": "E3 82 85 96",
        "File extension": "PWL",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS OneNote note",
        "Header (hex)": "E4 52 5C 7B 8C D8 A7 4D",
        "File extension": "ONE",
        "FileClass": "Miscellaneous",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows executable file_1",
        "Header (hex)": "E8",
        "File extension": "COM|SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows executable file_2",
        "Header (hex)": "E9",
        "File extension": "COM|SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows executable file_3",
        "Header (hex)": "EB",
        "File extension": "COM|SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "GEM Raster file",
        "Header (hex)": "EB 3C 90 2A",
        "File extension": "IMG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BitLocker boot sector (Vista)",
        "Header (hex)": "EB 52 90 2D 46 56 45 2D",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "BitLocker boot sector (Win7)",
        "Header (hex)": "EB 58 90 2D 46 56 45 2D",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Word document subheader",
        "Header (hex)": "EC A5 C1 00",
        "File extension": "DOC",
        "FileClass": "Word processing suite",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "RedHat Package Manager",
        "Header (hex)": "ED AB EE DB",
        "File extension": "RPM",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UTF-8 file",
        "Header (hex)": "EF BB BF",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Script Component (UTF-8)_1",
        "Header (hex)": "EF BB BF 3C",
        "File extension": "WSF",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Script Component (UTF-8)_2",
        "Header (hex)": "EF BB BF 3C 3F",
        "File extension": "WSC",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "YouTube Timed Text (subtitle) file",
        "Header (hex)": "EF BB BF 3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E",
        "File extension": "YTT",
        "FileClass": "Video",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "FAT12 File Allocation Table",
        "Header (hex)": "F0 FF FF",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "FAT16 File Allocation Table",
        "Header (hex)": "F8 FF FF FF",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "FAT32 File Allocation Table_1",
        "Header (hex)": "F8 FF FF 0F FF FF FF 0F",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "FAT32 File Allocation Table_2",
        "Header (hex)": "F8 FF FF 0F FF FF FF FF",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Bitcoin-Qt blockchain block file",
        "Header (hex)": "F9 BE B4 D9",
        "File extension": "DAT",
        "FileClass": "E-money",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "XZ archive",
        "Header (hex)": "FD 37 7A 58 5A 00",
        "File extension": "XZ",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Publisher subheader",
        "Header (hex)": "FD 37 7A 58 5A 00",
        "File extension": "PUB",
        "FileClass": "Word processing",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Thumbs.db subheader",
        "Header (hex)": "FD FF FF FF",
        "File extension": "DB",
        "FileClass": "Windows",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MS Publisher file subheader",
        "Header (hex)": "FD FF FF FF 02",
        "File extension": "PUB",
        "FileClass": "Word processing suite",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Microsoft Outlook-Exchange Message",
        "Header (hex)": "FD FF FF FF 04",
        "File extension": "MSG",
        "FileClass": "Email",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickBooks Portable Company File",
        "Header (hex)": "FD FF FF FF 04",
        "File extension": "QBM",
        "FileClass": "Financial",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Visual Studio Solution subheader",
        "Header (hex)": "FD FF FF FF 04",
        "File extension": "SUO",
        "FileClass": "Programming",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerPoint presentation subheader_4",
        "Header (hex)": "FD FF FF FF 0E 00 00 00",
        "File extension": "PPT",
        "FileClass": "Presentation",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_2",
        "Header (hex)": "FD FF FF FF 10",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerPoint presentation subheader_5",
        "Header (hex)": "FD FF FF FF 1C 00 00 00",
        "File extension": "PPT",
        "FileClass": "Presentation",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_3",
        "Header (hex)": "FD FF FF FF 1F",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Developer Studio subheader",
        "Header (hex)": "FD FF FF FF 20",
        "File extension": "OPT",
        "FileClass": "Programming",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_4",
        "Header (hex)": "FD FF FF FF 22",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_5",
        "Header (hex)": "FD FF FF FF 23",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_6",
        "Header (hex)": "FD FF FF FF 28",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Excel spreadsheet subheader_7",
        "Header (hex)": "FD FF FF FF 29",
        "File extension": "XLS",
        "FileClass": "Spreadsheet",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "PowerPoint presentation subheader_6",
        "Header (hex)": "FD FF FF FF 43 00 00 00",
        "File extension": "PPT",
        "FileClass": "Presentation",
        "Header offset": "512",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OS X ABI Mach-O binary (32-bit)",
        "Header (hex)": "FE ED FA CE",
        "File extension": "(none)",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "OS X ABI Mach-O binary (64-bit)",
        "Header (hex)": "FE ED FA CF",
        "File extension": "(none)",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "JavaKeyStore",
        "Header (hex)": "FE ED FE ED",
        "File extension": "(none)",
        "FileClass": "Programming",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Symantex Ghost image file",
        "Header (hex)": "FE EF",
        "File extension": "GHO|GHS",
        "FileClass": "Compressed archive",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UTF-16-UCS-2 file",
        "Header (hex)": "FE FF",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows executable",
        "Header (hex)": "FF",
        "File extension": "SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Works for Windows spreadsheet",
        "Header (hex)": "FF 00 02 00 04 04 05 54",
        "File extension": "WKS",
        "FileClass": "Spreadsheet",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "QuickReport Report",
        "Header (hex)": "FF 0A 00",
        "File extension": "QRP",
        "FileClass": "Financial",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows international code page",
        "Header (hex)": "FF 46 4F 4E 54",
        "File extension": "CPI",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Keyboard driver file",
        "Header (hex)": "FF 4B 45 59 42 20 20 20",
        "File extension": "SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "WordPerfect text and graphics",
        "Header (hex)": "FF 57 50 43",
        "File extension": "WP|WPD|WPG|WPP|WP5|WP6",
        "FileClass": "Word processing suite",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Generic JPEG Image file",
        "Header (hex)": "FF D8",
        "File extension": "JPE|JPEG|JPG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "FF D9"
        },
        {
        "File description": "JPEG-EXIF-SPIFF images",
        "Header (hex)": "FF D8 FF",
        "File extension": "JFIF|JPE|JPEG|JPG",
        "FileClass": "Picture",
        "Header offset": "0",
        "Trailer (hex)": "FF D9"
        },
        {
        "File description": "MPEG-4 AAC audio",
        "Header (hex)": "FF F1",
        "File extension": "AAC",
        "FileClass": "Audio",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MPEG-2 AAC audio",
        "Header (hex)": "FF F9",
        "File extension": "AAC",
        "FileClass": "Audio",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "Windows Registry file",
        "Header (hex)": "FF FE",
        "File extension": "REG",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UTF-32-UCS-2 file",
        "Header (hex)": "FF FE",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "UTF-32-UCS-4 file",
        "Header (hex)": "FF FE 00 00",
        "File extension": "(none)",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "MSinfo file",
        "Header (hex)": "FF FE 23 00 6C 00 69 00",
        "File extension": "MOF",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        },
        {
        "File description": "DOS system driver",
        "Header (hex)": "FF FF FF FF",
        "File extension": "SYS",
        "FileClass": "Windows",
        "Header offset": "0",
        "Trailer (hex)": "(null)"
        }
      ]


      return filesigs
}