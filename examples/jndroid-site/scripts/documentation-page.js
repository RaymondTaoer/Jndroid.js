/**
 * Created by lency on 5/18/15.
 */
function DocumentationPage() {
    FrameLayout.apply(this, []);

    var webView = new WebView();
    webView.loadUrl("../../src/out/index.html");
    this.addView(webView);
}
