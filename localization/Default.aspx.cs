using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

public partial class localization_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        CultureInfo culture = CultureInfo.InvariantCulture;
        string[] languages = Request.UserLanguages;
        if ((languages != null) && (languages.Length > 0))
        {
            culture = new CultureInfo(languages[0]);
        }

        HtmlGenericControl js = new HtmlGenericControl("script");
        js.Attributes.Add("src", "/bower_components/angular-i18n/angular-locale_" + culture.Name + ".js");
        this.Header.Controls.Add(js);

        js = new HtmlGenericControl("script");
        js.Attributes.Add("src", "values/" + culture.TwoLetterISOLanguageName + "/strings.js");
        this.Header.Controls.Add(js);

    }

}