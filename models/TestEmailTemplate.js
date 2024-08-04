const emailTemplate = `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" style="color-scheme:light dark;supported-color-schemes:light dark;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width"> <!--Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--Use the latest (edge) version rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta name="color-scheme" content="light dark"> <!--Dark mode Support-->
    <meta name="supported-color-schemes" content="light dark"> <!--Dark mode Support-->
    <title>Gift Card Payment Failed</title>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- CSS Reset : BEGIN -->
    <style>
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        background: #f1f1f1;
      }
      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }
      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }
      /* What it does: Fixes webkit padding issue. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto;
      }
      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode:bicubic;
      }
      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a {
        text-decoration: none;
      }
      /* What it does: A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],  /* iOS */
      .unstyle-auto-detected-links *,
      .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }
      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
        color: inherit !important;
      }
      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
        display: none !important;
      }
      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */
      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
          min-width: 320px !important;
        }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
          min-width: 375px !important;
        }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
          min-width: 414px !important;
        }
      }
    </style>
    <!-- Dark mode outlook style-->
    <style>
      [data-ogsc] .dark-img {
        display: block !important;
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        max-width: inherit !important;
        line-height: auto !important;
        margin-top: 0px !important;
        visibility: inherit !important;
      }
      /* Hides Light Mode-Only Content, Like Images */
      [data-ogsc] .light-img {
        display: none;
        display: none !important;
      }
      /* Custom Dark Mode Background Color */
      [data-ogsc] .darkmode {
        background-color: #0e0f10 !important;
      }
      [data-ogsc] .darkmode {
        background-color: #0e0f10 !important;
      }
      [data-ogsc] .darkmodeBg {
        background-color: #e02020 !important;
      }
      [data-ogsc] .dark_noborder {
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
      }
      [data-ogsc] .darkfooter {
        background-color: #000 !important;
      }
      [data-ogsc] .darkborder {
        border-top: 2px solid #ffffff !important;
      }
      [data-ogsc] .darkfooter {
        border: 4px solid #ffffff !important;
      }
      [data-ogsc] .darkBtnColor {
        color: #fa8bb4 !important;
      }
      [data-ogsc] .darkBtnBdr {
        border: 1px solid #ffffff !important;
      }
      [data-ogsc] h1, [data-ogsc] h2, [data-ogsc] p, [data-ogsc] span, [data-ogsc] a, [data-ogsc] b {
        color: #ffffff !important;
      }
      [data-ogsc] .link {
        color: #fc2779 !important;
      }
    </style>
    <!--Dark mode style-->
    <style>
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
      @media (prefers-color-scheme: dark ) {
        /* Shows Dark Mode-Only Content, Like Images */
        .dark-img {
          display: block !important;
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          max-width: inherit !important;
          line-height: auto !important;
          margin-top: 0px !important;
          visibility: inherit !important;
        }
        /* Hides Light Mode-Only Content, Like Images */
        .light-img {
          display: none;
          display: none !important;
        }
        .dark-img img, img.dark-img {
          filter: brightness(.8) contrast(1.2);
        }
        /* Custom Dark Mode Background Color */
        .darkmode {
          background-color: #0e0f10 !important;
        }
        .darkmodeBg {
          background-color: #e02020 !important;
        }
        .darkfooter {
          background-color: #000 !important;
        }
        .darkborder {
          border-top: 2px solid #ffffff !important;
        }
        .darkfooterBdr {
          border: 4px solid #ffffff !important;
        }
        .darkBtnColor {
          color: #fa8bb4 !important;
        }
        .darkBtnBdr {
          border: 1px solid #ffffff !important;
        }
        .dark_noborder {
          border-top: none !important;
          border-left: none !important;
          border-right: none !important;
        }
        h1, h2, p, span, a, b, td {
          color: #ffffff !important;
        }
        .link {
          color: #91ADD4 !important;
        }
      }
    </style>
    <!-- Desktop & Mobile style-->
    <style>
      body {
        width: 100%;
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        font-family: 'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;
      }
      table {
        border-collapse: collapse;
        margin: 0;
      }
      a {
        text-decoration: none;
      }
      .ReadMsgBody {
        width: 100%;
        background-color: #ffffff;
      }
      .ExternalClass {
        width: 100%;
        background-color: #ffffff;
      }
      @media only screen and (max-width: 500px) {
        .deviceWidth {
          width: 100%!important;
          padding: 0;
        }
        .remove-border-radius {
          border-radius: 0!important;
        }
        .center {
          text-align: center!important;
        }
        .noMargin {
          margin: 0 auto !important;
        }
        .removeAlign {
          float: none;
          margin: 0 auto;
        }
        .mrgnAuto {
          margin: 0 auto !important;
        }
        .right {
          text-align: right;
        }
        .left {
          text-align: left !important;
        }
        .removeBgColor {
          background-color: transparent !important;
        }
        .M_paddingheader {
          padding: 20px 24px !important;
        }
        .M_padding {
          padding: 0 24px !important;
        }
        .RightImg_Wid {
          width: 183px !important;
          padding: 0;
        }
        .M_paddingMainText {
          padding-top: 24px !important;
          padding-bottom: 16px !important;
        }
        .M_padding24 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        .M_paddingText2 {
          padding: 32px 0 40px !important;
        }
        .proImg_M {
          padding-right: 2px !important;
        }
        .proImg_M, .proImg_M img {
          width: 77px !important;
          height: 77px !important;
        }
        .proImg_M img {
          border-radius: 8px !important;
        }
        .remove_Padding {
          padding: 0 !important;
        }
        .padding_OrderHeading {
          padding: 40px 15px 32px !important;
        }
        .td_Block {
          display: block !important;
        }
        .M_InfoBoxmrgn {
          margin-top: 24px !important;
        }
        .M_padding1 {
          padding: 8px 24px 0 !important;
        }
        .M_padding2 {
          padding: 40px 0 20px!important;
        }
        .M_padding4 {
          padding: 40px 0!important;
        }
        .card_Padding {
          padding-bottom: 24px !important;
        }
        .Wid100_m {
          width: 100% !important;
        }
        .icon_padding_m {
          padding-left: 10px !important;
          padding-right: 10px !important;
        }
        .CheckoutBtnPadding {
          padding-top: 24px !important;
        }
        .footerNykLogo {
          padding: 32px 0 23px 0 !important;
          text-align: left !important;
        }
        .footerWid {
          width: 150px !important;
        }
        .footer_td {
          display: block !important;
          text-align: left !important;
          padding-top: 24px !important;
        }
        .tableWid100 {
          width: 100% !important;
        }
        .hideM {
          display: none !important;
        }
        .m_PaddingFooter {
          padding-bottom: 24px !important;
        }
        .footer_MenuPadding {
          padding: 0 0 24px 0 !important;
        }
        .ft_menu_PaddingBtm {
          padding-bottom: 16px !important;
        }
        .ft_icons_PdBtm {
          padding-bottom: 28px !important;
          text-align: left !important;
        }
        .ft_padding_8_32 {
          padding: 8px 0 32px !important;
        }
      }
    </style>
  </head>
  <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; ">
    <!-- Wrapper -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
      <tr>
        <td width="100%" valign="top" bgcolor="#f3f5f6" class="removeBgColor">
          <div style="max-width: 680px; margin: 24px auto;" class="email-container noMargin">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f9fafa" class="deviceWidth" style="margin:0 auto;">
            <tr>
              <td>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
                  <tr>
                    <td>
                      <!-- Body Block Starts-->
                      <div class="dark_noborder remove-border-radius" style="border-top: solid 1px #ebeced; border-radius: 16px; background-color: #fff; overflow: hidden;">
                      <table width="100%" cellpadding="0" cellspacing="0" valign="top"  class="noMargin">
                        <tr>
                          <td>
                            <!-- Start Header-->
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0;">
                                <tr>
                                  <td align="center" class="whiteBg" width="100%" style="padding:20px 0 0;">
                                    <a href="https://www.nykaa.com" target="_blank"><img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/nykaa_logo_2x.png" width="95" height="32" border="0" alt="" class="dark-img" style="border-top-left-radius: 16px;
                                      border-top-right-radius: 16px;max-width:100%;" />
                                      <p class="center paddingBtm_m" style="mso-table-lspace:0;mso-table-rspace:0; margin:0;color:rgba(0, 15, 29, 0.92); font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size:16px;font-weight: normal; line-height:16px;letter-spacing: 0px; text-align:center;paddint-top:8px;">Your Beauty. Our Passion</p>
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            <!-- End Header -->
                            <!-- Content Block starts here-->
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth dark_noborder" bgcolor="#eeeeed" style="margin:0;">
                              <tr>
                                <td valign="middle" width="100%" bgcolor="#ffffff" class="deviceWidth">
                                  <table valign="middle" align="center" width="100%" cellpadding="0" cellspacing="0" border="0" class="deviceWidth">
                                    <tr>
                                      <td align="center" style="padding-top: 18px; padding-bottom: 32px;"><img src="https://images-static.naikaa.com/media/wysiwyg/Mailers/2022/giftcard/PaymentFailed_banner@2x.jpg" width="680" height="auto" border="0" alt="" style="max-width:100%; vertical-align: middle;" /></td>
                                    </tr>
                                    <tr>
                                      <td valign="middle" class="center">
                                        <p class="M_padding24 center" style="margin:0;color:#001325; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 34px; font-weight: 600; line-height:40px;  letter-spacing: -0.25px; text-align:center; padding-left:94px; padding-right:94px;"> Payment for your Gift Card purchase was not completed. </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="middle" class="center">
                                        <p style="margin:0;color:#001325; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 16px; line-height:24px;letter-spacing: 0.17px; text-align: center; padding:16px 24px 24px;">Any amount, if debited will get refunded within {X days}</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="middle" class="center">
                                        <a href="https://www.nykaa.com/sales/order/history/v2" style="background: #E80071; color:#ffffff; font-family:'Source Sans Pro', sans-serif; font-size:16px;font-weight: 600; letter-spacing: 0.25px; text-align:center;text-decoration:none;display:block; width:171px; margin: 0 auto; padding: 14px 0; border-radius: 8px;">Retry Purchase</a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <!-- ContentBlock ends here -->
                            <!-- Profuct details start -->
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth dark_noborder" bgcolor="#fff" style="margin:0;">
                            <tr>
                              <td style="padding: 40px 72px;" class="M_padding24">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td>
                                      <p style="margin:0; color:#000f1d; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 20px; line-height:28px;letter-spacing: 0.15px; font-weight: 600;">
                                        <span>Order </span><span>{#500203916}</span>
                                        </p>
                                      <p style="margin:0; color:#000f1d; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 16px; line-height:24px;letter-spacing: 0.25px;">
                                        <span>1 Gift Card</span> • <span>{Friday, 23 February, 2020}</span>
                                        </p>
                                    </td>
                                  </tr>
                                  <!-- Gift card item start-->
                                  <tr>
                                    <td valign="middle">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                          <td width="<23></23>%">
                                            <img src="https://images-static.naikaa.com/media/wysiwyg/Mailers/2022/giftcard/icons-gift-card.png" alt="icon" width="112" height="auto" border="0" class="proImg_M"/>
                                          </td>
                                          <td width="2%"></td>
                                          <td width="auto" style="word-wrap: break-word;">Nykaa eGift Card</td>
                                          <td width="2%"></td>
                                          <td width="6%" style="text-align: right">x1</td>
                                          <td width="2%"></td>
                                          <td width="16%" style="text-align: right;">&#8377;2,000</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <!--Gift card item end-->
                                  <tr>
                                    <td style="padding-top: 16px; padding-bottom: 32px; border-top: 1px dashed rgba(0, 19, 37, 0.16); border-bottom: 1px solid rgba(0, 19, 37, 0.16)">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                          <td style="text-align: left">
                                            <p style="margin:0; color:#000f1d; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 20px; line-height:28px;letter-spacing: 0.15px; font-weight: 600;">
                                              To Pay
                                            </p>
                                          </td>
                                          <td style="text-align: right">
                                            <p style="margin:0; color:#000f1d; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 20px; line-height:28px;letter-spacing: 0.15px; font-weight: 600;">
                                              &#8377;2,000.00
                                            </p>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <p style="margin:0; color:#000f1d; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size: 14px; line-height:24px;letter-spacing: 0.15px; text-align: center; padding-top: 40px;">
                                        Reach out to your bank if your money is deducted and doesn't reach your bank account in the aforementioned time. Meanwhile, you can retry your transaction with us by using your card/netbanking or any other form of payment.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            </table>
                            <!-- Profuct details end -->
                          </td>
                        </tr>
                      </table>
                      </div>
                      <!-- Body Block End -->
                      <!-- Footer Block starts here -->
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="darkfooter deviceWidth">
                        <tr>
                          <td class="M_padding" style="padding:30px 72px">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth">
                              <tr>
                                <td class="footerNykLogo" style="color:#ffffff; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size:14px; line-height:22px; text-align:center; text-transform:uppercase; padding-bottom:30px;">
                                  <a href="https://www.nykaa.com" target="_blank"><img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/nykaa_footer_logo_2x.png" width="83" height="28" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table>
                                    <tr>
                                      <td class="ft_menu_PaddingBtm" align="center" style="padding-bottom:30px;">
                                        <table border="0" cellspacing="0" cellpadding="0" style="border-radius: 0.5px; border-top: dashed 1px rgba(140, 141, 148, .24);border-bottom: dashed 1px rgba(140, 141, 148, .24);" class="footerWid">
                                          <tr class="footer_MenuPadding" style="padding:16px 0;display:block;">
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/makeup/c/12" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-right: 44px;display: inline-block;">
                                              Makeup
                                              </a> </td>
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/skin/c/8377" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-right: 44px;display: inline-block;">
                                              Skin
                                              </a> </td>
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/hair-care/c/24" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-right: 44px;display: inline-block;">
                                              Hair
                                              </a> </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td class="ft_menu_PaddingBtm" align="center" style="padding-bottom:30px;">
                                        <table border="0" cellspacing="0" cellpadding="0" style="border-radius: 0.5px; border-top: dashed 1px rgba(140, 141, 148, .24);border-bottom: dashed 1px rgba(140, 141, 148, .24);" class="footerWid">
                                          <tr class="footer_MenuPadding" style="padding:16px 0;display:block;">
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/personal-care-appliances/c/1390" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-right: 44px;display: inline-block;">
                                              Appliances
                                              </a> </td>
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/personal-care-sale-online" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-right: 44px;display: inline-block;white-space: nowrap;">
                                              Personal Care
                                              </a> </td>
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/offers.html" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-right: 0;display: inline-block;">
                                              Sale
                                              </a> </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="deviceWidth">
                                    <td class="td_Block" width="50%">
                                      <table border="0" cellspacing="0" cellpadding="0" class="footerWid" style="margin:0 auto;">
                                        <tr>
                                          <td align="left" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-bottom:16px;white-space: nowrap;"> Show us some love on social media </td>
                                        </tr>
                                        <tr>
                                          <td align="center" class="ft_icons_PdBtm" style="padding-bottom:28px;">
                                            <table border="0" cellspacing="0" cellpadding="0" class="deviceWidth">
                                              <tr>
                                                <td width="44" style="font-size:0pt; line-height:0pt; text-align:left;padding-right:8px;">
                                                  <a href="https://www.facebook.com/MyNykaa" target="_blank"> <img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/facebook@2x.png" width="44" height="44" border="0" alt="" /> </a>
                                                </td>
                                                <td width="44" style="font-size:0pt; line-height:0pt; text-align:left;padding-right:8px;">
                                                  <a href="https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA" target="_blank"> <img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/youtube@2x.png" width="44" height="44" border="0" alt="" /> </a>
                                                </td>
                                                <td width="44" style="font-size:0pt; line-height:0pt; text-align:left;padding-right:8px;">
                                                  <a href="https://www.instagram.com/mynykaa/" target="_blank"> <img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/insta@2x.png" width="44" height="44" border="0" alt="" /> </a>
                                                </td>
                                                <td width="44" style="font-size:0pt; line-height:0pt; text-align:left;padding-right:8px;">
                                                  <a href="https://in.pinterest.com/mynykaa/" target="_blank"> <img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/pinterest@2x.png" width="44" height="44" border="0" alt="" /> </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td class="td_Block" width="50%">
                                      <table border="0" cellspacing="0" cellpadding="0" class="footerWid" style="margin:0 auto;">
                                        <tr>
                                          <td align="left" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:20px;letter-spacing: 0.5px;padding-bottom:16px;white-space: nowrap;"> Get exclusive offers on our app </td>
                                        </tr>
                                        <tr>
                                          <td class="ft_icons_PdBtm" align="center" style="padding-bottom:28px;">
                                            <table border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td width="44" style="font-size:0pt; line-height:0pt; text-align:left;padding-right:8px;">
                                                  <a href="https://apps.apple.com/in/app/nykaa/id1022363908" target="_blank"> <img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/app-store@2x.png" width="44" height="44" border="0" alt="" /> </a>
                                                </td>
                                                <td width="44" style="font-size:0pt; line-height:0pt; text-align:left;padding-right:8px;">
                                                  <a href="https://play.google.com/store/apps/details?id=com.fsn.nykaa&hl=en" target="_blank"> <img src="https://www.nykaa.com/media/wysiwyg/Mailers2020/play-store@2x.png" width="44" height="44" border="0" alt="" /> </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="m_PaddingFooter" align="center" style="padding-bottom:30px;">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-radius: 0.5px; border-top: dashed 1px rgba(140, 141, 148, .24);border-bottom:1px solid #ebebeb;padding:20px 0;">
                                    <tr>
                                      <td>
                                        <table class="tableWid100" width="90%" border="0" cellspacing="0" cellpadding="0" align="center">
                                          <tr class="ft_padding_8_32" style="padding: 16px 0; display: block;">
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/terms-conditions" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:16px;letter-spacing: 0.5px;display: inline-block;white-space:nowrap;">
                                              Terms &amp; Conditions
                                              </a> </td>
                                            <td style=" text-align:center;padding:0 20px;" class="hideM">| </td>
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/cancellation-policy" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:16px;letter-spacing: 0.5px;display: inline-block;white-space:nowrap;">
                                              Return &amp; Cancellation Policy
                                              </a> </td>
                                            <td style="text-align:center;padding:0 20px;" class="hideM">| </td>
                                            <td class="footer_td" style=" text-align:center;"><a href="https://www.nykaa.com/shipping-policy" target="_blank" style="color:rgba(0, 15, 29, 0.92);font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif;font-size:14px; line-height:16px;letter-spacing: 0.5px;display: inline-block;white-space:nowrap;">
                                              Shipping Policy
                                              </a> </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="left" style="color:rgba(0, 15, 29, 0.64); font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size:12px;font-weight: bold; line-height:16px;letter-spacing: 0.5px; text-align:center; padding-top:4px;">Sent with <span style="font-size:8px;">	&#x2764;</span> by Nykaa </td>
                              </tr>
                              <tr>
                                <td class="left" style="color:rgba(0, 15, 29, 0.64); font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size:12px;font-weight: bold; line-height:16px; letter-spacing: 0.5px;text-align:center; padding-top:4px;"> 104, Vasan Udyog Bhavan, Tulsi Pipe Road, Lower parel, Mumbai, Maharashtra, India </td>
                              </tr>
                              <tr>
                                <td class="m_PaddingFooter" style="border-bottom:1px solid #ebebeb;border-radius: 0.5px;padding-bottom: 30px;"></td>
                              </tr>
                              <tr>
                                <td>
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td style="color:#85868d; font-family:'SF Pro Text','SF Pro Icons','Segoe UI','Arial',sans-serif; font-size:12px; line-height:20px; text-align:center;padding-top:16px;padding-bottom: 16px;">Can’t see the emailer properly? <a href=" " target="_blank" style="color:#85868d; text-decoration:underline;">Open in browser</a></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!-- Footer Block ends here -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          </div>
        </td>
      </tr>
    </table>
    <!-- End Wrapper -->
    <div style="display:none; white-space:nowrap; font:15px courier; color:#ffffff;">
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </div>
  </body>
</html>

`;
module.exports = emailTemplate;