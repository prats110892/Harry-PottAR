
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["gettingstartedandroidnative.html#getting-started"] = "Getting started";
index.add({
    url: "gettingstartedandroidnative.html#getting-started",
    title: "Getting started",
    body: "# Getting started  &lt;p class='intro' markdown='1'&gt;Welcome to the Wikitude SDK. This document is designed to help you from your very first steps with the Wikitude SDK all the way through to advanced concepts and examples for developing your augmented reality project.&lt;/p&gt;  "
});

documentTitles["gettingstartedandroidnative.html#recommended-usage-of-this-documentation"] = "Recommended Usage of this Documentation";
index.add({
    url: "gettingstartedandroidnative.html#recommended-usage-of-this-documentation",
    title: "Recommended Usage of this Documentation",
    body: "### Recommended Usage of this Documentation  The documentation is arranged in a way to guide you through the various steps in your development process. We recommend  following each of the steps outlined below and reading the documentation in the order displayed.  &lt;div class=\&quot;bigNumbers\&quot; markdown='1'&gt; &lt;div class='number'&gt;1&lt;/div&gt; "
});

documentTitles["gettingstartedandroidnative.html#setup-your-projectsetupguideandroidnativehtml"] = "[Setup your project](setupguideandroidnative.html)";
index.add({
    url: "gettingstartedandroidnative.html#setup-your-projectsetupguideandroidnativehtml",
    title: "[Setup your project](setupguideandroidnative.html)",
    body: "#### [Setup your project](setupguideandroidnative.html) In this section we describe the necessary steps to setup a project in a detailed guide.  &lt;div class='number'&gt;2&lt;/div&gt; "
});

documentTitles["gettingstartedandroidnative.html#view-the-samplessamplesnativehtml"] = "[View the samples](samplesnative.html)";
index.add({
    url: "gettingstartedandroidnative.html#view-the-samplessamplesnativehtml",
    title: "[View the samples](samplesnative.html)",
    body: "#### [View the samples](samplesnative.html) All of the included samples are complete Android projects and apps. Browse through this section and get an idea of what the Wikitude SDK Native API is capable of. The relevant parts of the samples are described in more detail to highlight the applied concepts and patterns. These examples are designed to help you get off to a great start with the Wikitude SDK.  Viewing samples based on vision based augmented reality requires the corresponding reference images. All of them are available directly in the description of the sample or available as a collection [on this page](targetimages.html), which you can either view on the screen or print. &lt;/div&gt;  "
});

documentTitles["gettingstartedandroidnative.html#the-wikitude-native-sdk-augmented-reality-for-your-own-app"] = "The Wikitude Native SDK - Augmented Reality for your own app";
index.add({
    url: "gettingstartedandroidnative.html#the-wikitude-native-sdk-augmented-reality-for-your-own-app",
    title: "The Wikitude Native SDK - Augmented Reality for your own app",
    body: "### The Wikitude Native SDK - Augmented Reality for your own app  The Wikitude Native SDK is a software library and framework for mobile apps used to create augmented reality experiences.   As opposed to the Wikitude SDK which uses a JavaScript API the Wikitude Native SDK allows to create your AR experiences directly in Java and OpenGL.   "
});

documentTitles["gettingstartedandroidnative.html#architecture-of-the-wikitude-sdk"] = "Architecture of the Wikitude SDK";
index.add({
    url: "gettingstartedandroidnative.html#architecture-of-the-wikitude-sdk",
    title: "Architecture of the Wikitude SDK",
    body: "### Architecture of the Wikitude SDK  ![](images/WikitudeSDK_architecture_v5.png)  The image above shows the different components of the Wikitude SDK and possible approaches for creating augmented reality apps. Each of these approaches is based on a certain development environments (IDE) and platforms:  * **Computer Vision Engine:** The computer vision engine is a core component of the Wikitude SDK and used by all platforms. It is not directly accessible, but wrapped either by the Native API or the JavaScript API. * **Wikitude SDK  - Native API:** Provides access to the Wikitude computer vision engine natively for Android (Java) and iOS (ObjC). It also can load plugins via the Wikitude Plugins API. (NOTE: Wikitude SDK plugins have nothing to do with the Cordova or Unity Plugin concept.) * **Wikitude SDK  - JavaScript API:** Allows to build augmented reality worlds on basis of HTML and JavaScript. It is available for Android and iOS. The JavaScript API provides access to the functionality of the computer vision engine, location based AR, the Plugins API and dedicated rendering functionality. * **Wikitude SDK  - Plugins API:** An API to connect your own plugins to the Wikitude SDK. * **Wikitude SDK  - Cordova Plugin:** On top of the JavaScript API the Cordova plugin allows to use the Wikitude SDK in combination with Apache Cordova. * **Wikitude SDK  - Titanium Module:** On top of the JavaScript API the Titanium module allows to use the Wikitude SDK in combination with Titanium. * **Wikitude SDK  - Unity Plugin:** On top of the Native API the Unity plugin allows to use the Wikitude SDK in combination with Unity. * **Wikitude SDK  - Xamarin Component:** On top of the JavaScript API the Cordova plugin allows to use the Wikitude SDK in combination with Xamarin.  "
});

documentTitles["gettingstartedandroidnative.html#the-wikitude-developer-portal"] = "The Wikitude Developer Portal";
index.add({
    url: "gettingstartedandroidnative.html#the-wikitude-developer-portal",
    title: "The Wikitude Developer Portal",
    body: "### The Wikitude Developer Portal The &lt;a href=\&quot;http://www.wikitude.com\&quot; target=\&quot;_top\&quot;&gt;Wikitude Developer Section&lt;/a&gt; should be your first stop when you have specific development related questions. The portal hosts a very active &lt;a href=\&quot;http://www.wikitude.com/developer/developer-forum\&quot; target=\&quot;_top\&quot;&gt;Developer Community Forum&lt;/a&gt; where Wikitude staff members are constantly assisting other developers with helpful tips and advice. A &lt;a href=\&quot;http://www.wikitude.com/developer/knowledge-base\&quot; target=\&quot;_top\&quot;&gt;Knowledge Base&lt;/a&gt; helps with various questions.  "
});

documentTitles["gettingstartedandroidnative.html#feedback-and-contact"] = "Feedback and Contact";
index.add({
    url: "gettingstartedandroidnative.html#feedback-and-contact",
    title: "Feedback and Contact",
    body: "### Feedback and Contact We are always interested in your feedback and suggestions how we can improve this documentation. Please use the &lt;a href=\&quot;http://www.wikitude.com/contact\&quot; target=\&quot;_top\&quot;&gt;contact form&lt;/a&gt; on our website or visit us on &lt;a href=\&quot;https://google.com/+WikitudeDevs\&quot; target=\&quot;_top\&quot;&gt;Google+&lt;/a&gt; or &lt;a href=\&quot;http://www.facebook.com/WIKITUDE\&quot; target=\&quot;_top\&quot;&gt;Facebook&lt;/a&gt; "
});



documentTitles["setupguideandroidnative.html#setup-guide-android-native-api"] = "Setup Guide Android Native API";
index.add({
    url: "setupguideandroidnative.html#setup-guide-android-native-api",
    title: "Setup Guide Android Native API",
    body: "## Setup Guide Android Native API  "
});

documentTitles["setupguideandroidnative.html#project-setup"] = "Project Setup";
index.add({
    url: "setupguideandroidnative.html#project-setup",
    title: "Project Setup",
    body: "### Project Setup   * Create a new &lt;a href=\&quot;http://developer.android.com/training/basics/firstapp/creating-project.html\&quot; target=\&quot;_top\&quot;&gt;Android Studio Application Project&lt;/a&gt; (There is also a working SampleProject bundled in this SDK, where all these steps are already made)  * Copy the file `libs/wikitude_native_sdk.aar` into the libs folder of your module. (project root/app/libs)  * Open `build.gradle (Module: app)`, add the `wikitudesdk.aar` as a dependency and tell gradle to search the libs folder, like in the code below.  ``` android { 	... }  dependencies {     compile fileTree(dir: 'libs', include: ['*.jar'])     compile (name: 'wikitudesdk_native_sdk', ext:'aar')     ... }  repositories {     flatDir{         dirs 'libs'     } } ```  * If you already purchased a license, please set the applicationId to the package name you provided us with.  ``` xml     defaultConfig {         applicationId \&quot;xxxx\&quot;     } ```  * Add the following permissions and features to your AndroidManifest.xml  ``` xml     &lt;uses-permission android:name=\&quot;android.permission.CAMERA\&quot; /&gt;     &lt;uses-permission android:name=\&quot;android.permission.WRITE_EXTERNAL_STORAGE\&quot; /&gt;     &lt;uses-permission android:name=\&quot;android.permission.INTERNET\&quot; /&gt;      &lt;uses-feature android:glEsVersion=\&quot;0x00020000\&quot; android:required=\&quot;true\&quot; /&gt;      &lt;uses-feature android:name=\&quot;android.hardware.camera\&quot; android:required=\&quot;true\&quot; /&gt; ```  * Also in the Android manifest define following config changes for the activity which adds the OpenGL view  ``` xml         &lt;activity             android:name=\&quot;YOUR_PACKAGE_NAME.YOUR_ACTIVITY_NAME\&quot;             android:configChanges=\&quot;orientation|keyboardHidden|screenSize\&quot; /&gt; ```  * Read this chapter on how to [obtain a free trial key](triallicense.html), which you will later pass to the Wikitude Native SDK. "
});



documentTitles["supporteddevicesandroid.html#supported-android-devices"] = "Supported Android Devices";
index.add({
    url: "supporteddevicesandroid.html#supported-android-devices",
    title: "Supported Android Devices",
    body: "## Supported Android Devices  Wikitude SDK is running on devices fulfilling the following requirements:  &lt;table&gt; &lt;tr&gt; &lt;th&gt;&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Sensor-based AR (Geo-AR)&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Image recognition and tracking&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesandroid\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Android&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 4.0+ (API Level 14+)&lt;/li&gt;  &lt;li&gt;Compass&lt;/li&gt;  &lt;li&gt;GPS and / or network positioning&lt;/li&gt;  &lt;li&gt;Accelerometer&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;  &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/topics/graphics/opengl.html\&quot; target=\&quot;_top\&quot;&gt;OpenGL 2.0&lt;/a&gt;&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 4.0+ (API Level 14+)&lt;/li&gt;   &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;    &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;Devices with a capable CPU (armv7a and NEON support) e.g.&lt;/li&gt;  &lt;ul&gt;&lt;li&gt;Samsung Galaxy S2 or newer&lt;/li&gt;  &lt;li&gt;Nexus 4 or newer&lt;/li&gt;  &lt;li&gt;Nexus 10 (2012) or newer&lt;/li&gt; &lt;/ul&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;/tr&gt;  &lt;/table&gt;  Requirements for other operating systems and platforms are listed in [this overview](supporteddevices.html)."
});



documentTitles["supporteddevices.html#supported-devices"] = "Supported Devices";
index.add({
    url: "supporteddevices.html#supported-devices",
    title: "Supported Devices",
    body: "#### Supported Devices Wikitude SDK is running on devices fulfilling the following requirements:  &lt;table&gt; &lt;tr&gt; &lt;th&gt;&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Sensor-based AR (Geo-AR)&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Image recognition and tracking&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesandroid\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Android&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 4.0+ (API Level 14+)&lt;/li&gt;  &lt;li&gt;Compass&lt;/li&gt;  &lt;li&gt;GPS and / or network positioning&lt;/li&gt;  &lt;li&gt;Accelerometer&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;  &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/topics/graphics/opengl.html\&quot; target=\&quot;_top\&quot;&gt;OpenGL 2.0&lt;/a&gt;&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 4.0+ (API Level 14+)&lt;/li&gt;   &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;    &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;Devices with a capable CPU (armv7a and NEON support) e.g.&lt;/li&gt;  &lt;ul&gt;&lt;li&gt;Samsung Galaxy S2 or newer&lt;/li&gt;  &lt;li&gt;Nexus 4 or newer&lt;/li&gt;  &lt;li&gt;Nexus 10 (2012) or newer&lt;/li&gt; &lt;/ul&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesepson\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Epson&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Epson Moverio BT-200&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Epson Moverio BT-200&lt;/li&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesglass\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Google Glass&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Google Glass&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Google Glass&lt;/li&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt;  &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesios\&quot;&gt;&lt;/a&gt;&lt;strong&gt;iOS&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Devices running iOS 7.0  and up&lt;/li&gt;  &lt;li&gt;Compass&lt;/li&gt;  &lt;li&gt;GPS and / or network positioning&lt;/li&gt;  &lt;li&gt;Accelerometer&lt;/li&gt;  &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;   &lt;li&gt;Devices running iOS 7.0  and up&lt;/li&gt;   &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;Devices with a capable CPU (minimum Apple A4 SoC) e.g.&lt;/li&gt;  &lt;ul&gt;&lt;li&gt;iPhone 4 or newer&lt;/li&gt;  &lt;li&gt;iPad2 or newer&lt;/li&gt;  &lt;li&gt;iPod Touch 5th gen&lt;/li&gt;&lt;/ul&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesvuzix\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Vuzix&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Vuzix M100&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Vuzix M100&lt;/li&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; "
});



documentTitles["triallicense.html#how-to-obtain-a-free-trial-license"] = "How to obtain a free trial license";
index.add({
    url: "triallicense.html#how-to-obtain-a-free-trial-license",
    title: "How to obtain a free trial license",
    body: "## How to obtain a free trial license  The Wikitude SDK requires a valid license key to be able to run properly. An empty or missing license key will block the augmented reality view from showing any meaningful content. You will see a watermark across the screen with the words `License Key Missing`. All JavaScript API calls will be ignored and not interpreted.  When downloading the Wikitude SDK you will be forwarded to the [license generation page](http://www.wikitude.com/developer/licenses), where a trial license key is automatically generated for you.   ![](images/trial_key_license_page.png)  Copy the key into your app, which will unlock the trial mode of the Wikitude SDK. The trial mode of the Wikitude SDK contains the full feature set of the Wikitude SDK but will show a `Trial` watermark across the screen.  Each trial license key is valid for every application ID on every operating system. You can use the same trial license key in multiple apps.   "
});

documentTitles["triallicense.html#where-should-i-enter-the-license-key"] = "Where should I enter the license key";
index.add({
    url: "triallicense.html#where-should-i-enter-the-license-key",
    title: "Where should I enter the license key",
    body: "## Where should I enter the license key    "
});

documentTitles["triallicense.html#android-native-api"] = "Android Native API";
index.add({
    url: "triallicense.html#android-native-api",
    title: "Android Native API",
    body: "### Android Native API To use the Wikitude Android SDK you need to provide a valid license key to the `onCreate` lifecycle method of the Wikitude SDK object.   Create a `StartupConfiguration` object and pass it the license as a string and then call the `onCreate(getApplicationContext(), startupConfiguration)` method.   ```      WikitudeSDKStartupConfiguration startupConfiguration = new WikitudeSDKStartupConfiguration(WikitudeSDKConstants.WIKITUDE_SDK_KEY, CameraSettings.CameraPosition.BACK, CameraSettings.CameraFocusMode.CONTINUOUS);         _wikitudeSDK.onCreate(getApplicationContext(), startupConfiguration); ```                  "
});



documentTitles["samplesnative.html#examples"] = "Examples";
index.add({
    url: "samplesnative.html#examples",
    title: "Examples",
    body: "# Examples  The following examples should give you an overview of the capabilities offered by the Wikitude SDK. Each sample is capable of running without modifications on all supported platforms.   The Sample App is a fully functional sample project either for Android or iOS. You can easily import it into Android Studio or Xcode and work from there. The user interface is kept very simple and shows a list to select the sample you are interested.    "
});

documentTitles["samplesnative.html#wikitude-sdk-android-native-api-examples"] = "Wikitude SDK Android Native API Examples";
index.add({
    url: "samplesnative.html#wikitude-sdk-android-native-api-examples",
    title: "Wikitude SDK Android Native API Examples",
    body: "### Wikitude SDK Android Native API Examples  This section describes the `Native SDK Sample` project in detail and highlights the main features and use-cases of the Wikitude SDK. The project is part of the SDK bundle and is an Android Studio project, ready to run on any of the supported Android devices.  *Note: You cannot run the Wikitude SDK project on an Android Emulator due to OpenGL restrictions.*  Run through the setup guide, install the sample project on your device and scroll through the sample list.   "
});

documentTitles["samplesnative.html#setup"] = "Setup";
index.add({
    url: "samplesnative.html#setup",
    title: "Setup",
    body: "### Setup  * Download latest &lt;a href=\&quot;https://developer.android.com/sdk/index.html\&quot; target=\&quot;_top\&quot;&gt;Android SDK&lt;/a&gt; through the Android Studio Bundle (either Mac OS or Windows) * From the main menu bar, select   `File` -&gt; `Open` which will open the import wizard. * Navigate to the `NativeSDKExamples` project folder from the package you downloaded from us. * Click `Choose` to open the Example project.   * Use an Android device that has all hard- and software requirements (see [Supported Devices](SupportedDevicesAndroid.html)).&lt;/a&gt; * Enable USB debugging on your device. * Plug in the device via USB. * Back in Android Studio click on the green \&quot;Play\&quot;-Button to install the Example application on your device.      "
});



documentTitles["clientrecognitionnative.html#client-recognition"] = "Client Recognition";
index.add({
    url: "clientrecognitionnative.html#client-recognition",
    title: "Client Recognition",
    body: "## Client Recognition  This example shows how to recognize images in the viewfinder and overlay it with images.   For a better understanding, here are some terms that will be used in the following and other section of this documentation related to vision-based augmented reality.  - **Target**: A 2D target image and its associated extracted data that is used by the tracker to recognize an image.  - **Target Collection**: An archive storing a collection of 2D targets that can be recognized by the tracker. A target collection can hold up to 1000 targets. Target collections are stored as `.wtc` files  - **3D Tracking Map**: A tracking map is the equivalent of a target for 3D tracking. The map contains the relevant characteristics of a three-dimensional object. In order to recognize and track 3D objects you need to record a map first and then load this map. Maps are stored as `.wtm` files.   - **ClientTracker**: The tracker analyzes the live camera image and detects the 2D targets stored in its associated target collection. Multiple trackers can be created, however only one tracker can be active for recognition at any given time.   &lt;a id=\&quot;SimpleClientTrackingAndroid\&quot;&gt;&lt;/a&gt; "
});

documentTitles["clientrecognitionnative.html#simple-2d-client-tracking-android"] = "Simple 2D Client Tracking Android";
index.add({
    url: "clientrecognitionnative.html#simple-2d-client-tracking-android",
    title: "Simple 2D Client Tracking Android",
    body: "### Simple 2D Client Tracking Android  In this section we will go through the code of the `SimpleClientTrackingActivity`, which you can find in the example application under the package `com.wikitude.samples.recognition.client`. We will discuss general concepts on how to use the Wikitude Native SDK as we go along, please don't skip this section even if you are for example only interested in cloud recognition.  The `WikitudeSDK` class is structured to be used in a standard Android activity and to make use of the activities life cycle events. We will use interfaces to communicate to the `WikitudeSDK` which type of rendering method we would like to use and to provide the necessary callbacks for Client- and Cloud-Trackers.  First let us have a look at the declaration of the activity class.   ```java public class SimpleClientTrackingActivity extends Activity implements ClientTrackerEventListener, ExternalRendering { ... } ``` We subclass the standard Android activity and implement the interfaces `ClientTrackerEventListener` and `ExternalRendering`. Later on when we create the instance of the WikitudeSDK we will pass the `this` pointer of our activity to the WikitudeSDK constructor and this way indicate our chosen type of rendering. In this example we will use external rendering, for details on how to setup the rendering and the difference between internal and external rendering please read through the section on [rendering](renderingnative.html).  The next step we will take is create an instance of the `WikitudeSDK` class. This and the `StartupConfiguration` are the only objects you will need to create by yourself, every other object will be created by factory methods of the `WikitudeSDK` instance.   &lt;div class=\&quot;warning\&quot;&gt;  IMPORTANT: Do not instantiate any other class out of the Wikitude Native SDK other than the WikitudeSDK and the WikitudeSDKStartupConfiguration. &lt;/div&gt;  We are now going through each method of the `SimpleClientTrackingActivity` class, starting with `onCreate`. In the `onCreate` method we instantiate an instance of the `WikitudeSDK`, and an instance of the `WikitudeSDKStartupConfiguration`, which will hold our license key. If you do not have a license key yet, read this chapter on how to [obtain a free trial key](triallicense.html). After that we are ready to propagate the onCreate life cycle event to the Wikitude SDK. It is very important that you do propagate onCreate, onPause and onResume otherwise the Wikitude SDK won't be able to properly manage its resources which will lead to unexpected behavior.  After we called the WikitudeSDK onCreate method the SDK is initialized and we are now able to create a `ClientTracker`. To do that we get the `TrackerManager` from the `WikitudeSDK` instance and call `create2dClientTracker` passing the url to the WTC file. Since we are loading an asset on the device we indicate that by starting the url with the string file:///android_asset/ and add the path to the file starting from the asset root directory.  To get notified when the Tracker finished loading, recognized a target and so on we register the Activity which implements ClientTrackerEventListener as a Listener on the newly created Tracker.  ```java @Override protected void onCreate(Bundle savedInstanceState) {     super.onCreate(savedInstanceState);     _wikitudeSDK = new WikitudeSDK(this);     WikitudeSDKStartupConfiguration startupConfiguration = new WikitudeSDKStartupConfiguration(WikitudeSDKConstants.WIKITUDE_SDK_KEY);     _wikitudeSDK.onCreate(getApplicationContext(), startupConfiguration);     ClientTracker tracker = _wikitudeSDK.getTrackerManager().create2dClientTrackerFromUrl(\&quot;file:///android_asset/magazine.wtc\&quot;);     tracker.registerTrackerEventListener(this); } ```  The next important method to look at is the `onRenderExtensionCreated` method. Since we decided to use the external rendering functionality by implementing `ExternalRendering`, the `WikitudeSDK` provides us with a RenderExtension. The RenderExtension interface exposes the same methods as the standard `GLSurfaceView.Renderer`. In your custom `GLSurfaceView.Renderer` the first thing to do in every method is to always call the same method on the provided RenderExtension. To be able to that we pass the RenderExtension to the constructor of our `Renderer`, create our `SurfaceView`, initialize a `Driver` and set our `SurfaceView` as our content view.  ```java @Override public void onRenderExtensionCreated(final RenderExtension renderExtension_) {     _glRenderer = new GLRenderer(renderExtension_);     _view = new CustomSurfaceView(getApplicationContext(), _glRenderer);     _driver = new Driver(_view, 30);     setContentView(_view); } ```  Next we will have a look at the `ClientTrackerEventListener` interface. The `onErrorLoading` method will be called like the name suggest when the Wikitude SDK wasn't able to load the client tracker. The most likely cause of this to happen would be that either the path to the WTC file was incorrect or the WTC was corrupted. The `onTrackerFinishedLoading` method will be called once when the tracker was successfully loaded. When the client tracker first recognizes a target it will call `onTargetRecognized` providing you with the recognized target name. When the client tracker starts tracking this target it will call `onTracking` continuously until it loses the target and finishes tracking with a call to `onTargetLost`.  The `RecognizedTarget` object provided in the `onTracking` method contains information about the tracked target like the name, the distance to the target and most importantly the matrices which describe where on the camera frame the target was found. Since we need this information to draw on the target we pass the object to our renderer in the 'onTracking' method and remove it when we lose the target in the `onTargetLost` method.  ```java @Override public void onErrorLoading(final ClientTracker clientTracker_, final String errorMessage_) {     Log.v(TAG, \&quot;onErrorLoading: \&quot; + errorMessage_); }  @Override public void onTrackerFinishedLoading(final ClientTracker clientTracker_, final String trackerFilePath_) {  }  @Override public void onTargetRecognized(final ClientTracker tracker_, final String targetName_) {  }  @Override public void onTracking(final ClientTracker tracker_, final RecognizedTarget recognizedTarget_) {     _glRenderer.setCurrentlyRecognizedTarget(recognizedTarget_); }  @Override public void onTargetLost(final ClientTracker tracker_, final String targetName_) {     _glRenderer.setCurrentlyRecognizedTarget(null); } ```  &lt;a id=\&quot;ExtendedClientTracking\&quot;&gt;&lt;/a&gt; "
});

documentTitles["clientrecognitionnative.html#2d-extended-client-tracking-android"] = "2D Extended Client Tracking Android";
index.add({
    url: "clientrecognitionnative.html#2d-extended-client-tracking-android",
    title: "2D Extended Client Tracking Android",
    body: "### 2D Extended Client Tracking Android  Extended tracking is an optional mode you can set for each target separately. In this mode the Wikitude SDK will try to continue to scan the environment of the user even if the original target image is not in view anymore. So the tracking extends beyond the limits of the original target image. The performance of this feature depends on various factors like computing power of the device, background texture and objects.  Based on the previous sample, to enable Extended Tracking for a tracker you need to provide a String array which defines which targets should be extended. In this sample we simply set a wildcard `*` so that all targets in this tracker are extended.   ``` ClientTracker tracker = _wikitudeSDK.getTrackerManager().create2dClientTracker(\&quot;file:///android_asset/magazine.wtc\&quot;, new String[]{\&quot;*\&quot;}); ```  "
});

documentTitles["clientrecognitionnative.html#3d-client-tracking-android"] = "3D Client Tracking Android";
index.add({
    url: "clientrecognitionnative.html#3d-client-tracking-android",
    title: "3D Client Tracking Android",
    body: "### 3D Client Tracking Android  In this example we will take a look at how to use the Wikitude `TrackingMapRecorder` and 3D ClientTracker to enable 3D Tracking. If you haven't already done so please read through the first section on 2D Tracking before continuing here. Essential concepts like how to setup rendering or how to use a Wikitude Tracker are explained there and won't be repeated here. Similar if you don't already know why we need to record a Tracking Map or what to expect from 3D Tracking in general please read through the [introduction to 3D tracking](3dtracking.html).  After we setup our activity to use `ExternalRendering` we will initialize the user interface in the `onRenderExtensionCreated` callback method. Let's look at the first lines of code below.  ```java @Override public void onRenderExtensionCreated(final RenderExtension renderExtension_) {          ... setup GL view ...          showStartDialog();      ... }  private void showStartDialog() {     AlertDialog.Builder builder = new AlertDialog.Builder(ClientTracking3DActivity.this);     builder.setNegativeButton(\&quot;Leave Example\&quot;, new DialogInterface.OnClickListener() {         ...     });     builder.setPositiveButton(\&quot;Start Recording\&quot;, new DialogInterface.OnClickListener() {         public void onClick(DialogInterface dialog, int id) {             _wikitudeSDK.getTrackingMapRecorder().startRecording();             _trackingQualityIndicator.setVisibility(View.VISIBLE);             _stopButton.setVisibility(View.VISIBLE);             _stopButton.setEnabled(true);         }     });      ...      dialog.show(); }  ```  The first thing we do in the `onRenderExtensionCreated` method after setting up rendering is calling the private method `showStartDialog`. The purpose of the start dialog is to provide the user with some information about what he needs to do and a way to start the map recording. We activate the positive button of the AlertDialog by setting the title to `Start Recording` and passing an `OnClickListener`. In this `OnClickListener` we start the Tracking Map recording by getting the `TrackingMapRecorder` from the `WikitudeSDK` instance and calling `startRecording`. We also update the UI by setting the necessary components to visible. We will talk about what those components do later in this section.  ```java @Override public void onRenderExtensionCreated(final RenderExtension renderExtension_) {          ... setup GL view ...     ... show start dialog ...      _wikitudeSDK.getTrackingMapRecorder().registerTrackingMapRecorderEventListener(new TrackingMapRecorderEventListener() {         @Override         public void onFinishedSavingTrackingMap(File file) {             ...         }          @Override         public void onErrorSavingTrackingMap(String errorMessage) {             ...         }          @Override         public void onTrackingMapRecordingQualityChanged(final int oldTrackingQuality, final int newTrackingQuality) {             ...         }          @Override         public void onTrackingMapRecordingCanceled() {             ...         }     });      ... ```  The next thing we do in the `onRenderExtensionCreated` method is registering a `TrackingMapRecorderEventListener` by calling `registerTrackingMapRecorderEventListener` on the `TrackingMapRecorder` we get from the WikitudeSDK instance. The `TrackingMapRecorderEventListener` interface exposes several callbacks to us. In the following we will go through the implementation of each of them one by one, starting with the `onFinishedSavingTrackingMap` method.  ```java _wikitudeSDK.getTrackingMapRecorder().registerTrackingMapRecorderEventListener(new TrackingMapRecorderEventListener() {     @Override     public void onFinishedSavingTrackingMap(File file) {         runOnUiThread(new Runnable() {             @Override             public void run() {                 saveMessage.setVisibility(View.INVISIBLE);                 _stopButton.setVisibility(View.INVISIBLE);             }         });         _wikitudeSDK.getTrackerManager().create3dClientTracker(file.getAbsolutePath()).registerTrackerEventListener(ClientTracking3DActivity.this);     }     ... }  ``` The `onFinishedSavingTrackingMap` callback will be called when the `TrackingMapRecorder` successfully finished saving the recording to file. We will react to that fact by getting the UI ready for tracking by removing all visible UI components. After we cleared the UI we get the `TrackingManager` from the `WikitudeSDK` instance and create a new 3D ClientTracker by calling `create3dClientTracker` passing the path to the newly created Tracking Map file. As a result of this call the `WikitudeSDK` will pass back to us the `ClientTracker` instance it just created for us. We use it right away to register our Activity as a `TrackerEventListener`. The implementation of the `TrackerEventListener` callbacks is the same as in the first example of this chapter so we won't go into detail about it here.  ```java _wikitudeSDK.getTrackingMapRecorder().registerTrackingMapRecorderEventListener(new TrackingMapRecorderEventListener() {          ...      @Override     public void onErrorSavingTrackingMap(String errorMessage) {         Log.v(TAG, errorMessage);     }      ... } ```  The second callback method of the `TrackingMapRecorderEventListener` is the `onErrorSavingTrackingMap`. This method will be called by the `TrackingMapRecorder` if there was an error saving the Tracking Map from memory to file. This could be for several reasons but since Tracking Maps can get quite large with longer recordings the most likely one is that there is not enough storage space left on the device. In this example we just log the error message but if you are using the `TrackingMapRecorder` in a production app, you probably want to react on the error in some way.  ```java _wikitudeSDK.getTrackingMapRecorder().registerTrackingMapRecorderEventListener(new TrackingMapRecorderEventListener() {          ...      @Override     public void onTrackingMapRecordingQualityChanged(final int oldTrackingQuality, final int newTrackingQuality) {         runOnUiThread(new Runnable() {             @Override             public void run() {                 _currentTrackingQuality = newTrackingQuality;                 switch (newTrackingQuality) {                     case -1:                         _trackingQualityIndicator.setBackgroundColor(Color.parseColor(\&quot;#FF3420\&quot;));                         _trackingQualityIndicator.setText(R.string.tracking_quality_indicator_bad);                         break;                     case 0:                         _trackingQualityIndicator.setBackgroundColor(Color.parseColor(\&quot;#FFD900\&quot;));                         _trackingQualityIndicator.setText(R.string.tracking_quality_indicator_average);                         break;                     default:                         _trackingQualityIndicator.setBackgroundColor(Color.parseColor(\&quot;#6BFF00\&quot;));                         _trackingQualityIndicator.setText(R.string.tracking_quality_indicator_good);                 }             }         });     }      ... } ```  Since it can be hard to tell when your recording reached sufficient quality to be used for tracking, the `TrackingMapRecorder` will update us in the `onTrackingMapRecordingQualityChanged` method about the current map status. It will pass `-1` if the least necessary quality isn't reached yet, `0` as soon as tracking with this map will be ok but not great and something higher than `0` when the desired quality was reached. We react to all three indications by setting the `trackingQualityIndicator` UI component to the appropriate state.  ```java _wikitudeSDK.getTrackingMapRecorder().registerTrackingMapRecorderEventListener(new TrackingMapRecorderEventListener() {          ...      @Override     public void onTrackingMapRecordingCanceled() {         showStartDialog();     }      ... } ```  The last of the `TrackingMapRecorderEventListener` callbacks will be called by the `TrackingMapRecorder` after a recording was canceled. After you canceled a recording you will need to wait till this method is called to start a new map recording. This is exactly what we do in this example by showing the initial start dialog to the user.   ```java @Override public void onRenderExtensionCreated(final RenderExtension renderExtension_) {     ...      _stopButton = (Button) findViewById(R.id.client_tracking_3d_stop_recording);     _stopButton.setOnClickListener(new View.OnClickListener() {         @Override         public void onClick(View v) {             _stopButton.setVisibility(View.INVISIBLE);             _trackingQualityIndicator.setVisibility(View.INVISIBLE);             if (_currentTrackingQuality &gt; 0) {                 saveMessage.setVisibility(View.VISIBLE);                 deleteTemporaryTrackingMap();                 _wikitudeSDK.getTrackingMapRecorder().stopRecording(TRACKING_MAP_FILENAME);             } else {                 showConfirmStopDialog();             }         }     });      ... }  ```  After we implemented all TrackingMapRecorder callbacks the last thing we do in the `onRenderExtionsionCreated` method is implement the `OnClickListener` of the \&quot;Stop Recording\&quot; button. When the \&quot;Stop Recording\&quot; button is clicked the first thing we do is clear up the UI. Then we check if the last tracking quality indicator value was already high enough for the best possible tracking quality. If it was we show a save message to the user, clean up the last recording if there is one and stop and save the recording by getting the `TrackingMapRecorder` and calling `stopRecording` passing the name of the file the map should be stored in. Please note that you only need to pass the name of the file without any path information. All recordings will be save in external storage under `Android/data/com.wikitude.nativesdksampleapp/files`.  If the tracking quality indicator value indicates a bad or average recording quality we show the user a confirmation dialog, by calling the private method `showConfirmStopDialog`.  ```java private void showConfirmStopDialog() {     AlertDialog.Builder builder = new AlertDialog.Builder(ClientTracking3DActivity.this);     builder.setNegativeButton(\&quot;Restart\&quot;, new DialogInterface.OnClickListener() {         @Override         public void onClick(DialogInterface dialog, int which) {             _wikitudeSDK.getTrackingMapRecorder().cancelRecording();         }     });     builder.setPositiveButton(\&quot;Continue\&quot;, new DialogInterface.OnClickListener() {         public void onClick(DialogInterface dialog, int id) {             deleteTemporaryTrackingMap();             _wikitudeSDK.getTrackingMapRecorder().stopRecording(TRACKING_MAP_FILENAME);         }     });     builder.setMessage(\&quot;In order to experience a well working 3d tracking example, please continue recording until the quality indicator says 'Good'.\&quot;)             .setTitle(\&quot;Tracking Map quality not sufficient\&quot;);     AlertDialog dialog = builder.create();     dialog.setCancelable(false);     dialog.show(); } ``` In the confirm stop dialog we give the user the option to either restart the recording or continue to save the recording. If the user decides to restart we cancel the recording by calling `cancelRecording` on the `TrackingMapRecorder`. If the user decides to use the map anyway we stop the recording like above.    "
});



documentTitles["cloudrecognitionnative.html#cloud-recognition"] = "Cloud Recognition";
index.add({
    url: "cloudrecognitionnative.html#cloud-recognition",
    title: "Cloud Recognition",
    body: "## Cloud Recognition  This example shows how to recognize images on a cloud server and then overlay it with augmentations utilizing the `CloudTracker` class.   For a better understanding, here are some terms that will be used in the following and other sections of this documentation related to vision-based augmented reality.  - **Target**: An image and its associated extracted data that is used to recognize an image.  - **Target Collection**: A group of `targets` that are searched together. Think of it as a directory, which contains all your images you want to search. The Wikitude SDK can work with two different sorts of `Target Collections` 	+ On-device Target Collection: a static `wtc` file containing the extracted data of your images. Can consist of up to 1,000 images. 	+ Cloud Target Collection: A target collection stored on the Wikitude server. See `Cloud Archive` below. Can consist of up to 50,000 images.  - **Cloud Archive**: An archive stored on the server that is optimized for cloud-based recognition. It is generated from a `Target Collection` and is used in combination with `CloudTracker` .   - **CloudTracker**: Instead of analysing and computing the live camera feed directly on the device like the `ClientTracker`, the `CloudTracker` will send the image(s) taken by the camera to the Wikitude Cloud Recognition server. The server will then do the hard work of trying to match the image with your targets in the specified cloud archive. Beside the benefit of searching in large image database using the `CloudTracker`  instead of `ClientTracker`  has also a positive impact on the general performance in most cases. Especially when using a large target collection and on older devices.   For both Cloud Recognition samples below we will use external rendering if you don't know what that means please go through the section on [rendering](renderingnative.html) before starting here.  The `CloudTracker` is able to run in two modes, we call them on-click and continuous. In On-Click mode a single recognition cycle will be executed, in continuous mode the recognition will be started in a variable interval. You can find both examples discussed in the following in our sample application under the package `com.wikitude.recognition.cloud`.  "
});

documentTitles["cloudrecognitionnative.html#regional-server-endpoints"] = "Regional server endpoints";
index.add({
    url: "cloudrecognitionnative.html#regional-server-endpoints",
    title: "Regional server endpoints",
    body: "#### Regional server endpoints Before we get started please note that you have to choose which regional-distributed Wikitude server the SDK should contact.  The cloud recognition server region can be selected by calling `setCloudRecognitionServerRegion` of the `TrackerManager`. Every `CloudTracker` created after this call, will use the chosen region. In the following code snippet we will change the Cloud Recognition server location from the default setting of Europe to China.  ```java     _wikitudeSDK.getTrackerManager().setCloudRecognitionServerRegion(TrackerManager.ServerRegion.CHINA); ```    &lt;a id=\&quot;OnClickCloudRecognition\&quot;&gt;&lt;/a&gt; "
});

documentTitles["cloudrecognitionnative.html#on-click-cloud-recognition"] = "On-Click Cloud Recognition";
index.add({
    url: "cloudrecognitionnative.html#on-click-cloud-recognition",
    title: "On-Click Cloud Recognition",
    body: "### On-Click Cloud Recognition  We will now go through the class `OnClickCloudTrackingActivity` of our sample application, starting with the `onCreate` method. In `onCreate` after creating an instance of the `WikitudeSDK`, we obtain the `TrackerManager` and call `create2dCloudTracker` passing our authentication token and target collection id. On the `CloudTracker` instance returned by the `TrackerManager` we call `registerTrackerEventListener` passing `this` to register our activity as a listener for this particular `CloudTracker`. For this to work, we implemented `CloudTrackerEventListener` on our activity.  ```java public class OnClickCloudTrackingActivity extends Activity implements CloudTrackerEventListener, ExternalRendering {          ...      @Override     protected void onCreate(Bundle savedInstanceState) {         ...         _wikitudeSDK.onCreate(getApplicationContext(), startupConfiguration);         _cloudTracker = _wikitudeSDK.getTrackerManager().create2dCloudTracker(\&quot;b277eeadc6183ab57a83b07682b3ceba\&quot;, \&quot;54e4b9fe6134bb74351b2aa3\&quot;);         _cloudTracker.registerTrackerEventListener(this);     }  ```  `CloudTrackerEventListener` defines callbacks which enable the `CloudTracker` to communicate its status. On one hand we receive notifications about the loading process and on the other hand we receive updates concerning the tracking process. Let's first have a look at the methods concerning the loading process. The method `onTrackerFinishedLoading` will be called, when the `CloudTracker` was successfully loaded and initialized. In this example we do not have a reason to react on that, but you could for example do some initializations to be ready when the `CloudTracker` recognizes a target. The `onTrackerLoadingError` method will be called when there was a problem loading the `CloudTracker`. We'll receive an errorMessage, containing more information about the problem. For debugging purposes we just log the error for now. In a real world project, were you already tested your app and know it won't be some small mistake like for example a wrong target collection id, you probably want to remove the log and for example try to load the `CloudTracker` again.  ```java      @Override     public void onTrackerFinishedLoading(final CloudTracker cloudTracker_) {     }      @Override     public void onTrackerLoadingError(final CloudTracker cloudTracker_, final String errorMessage_) {         Log.d(TAG, \&quot;onTrackerLoadingError: \&quot; + errorMessage_);     }  ```  We had a look at the loading process callbacks above. Now let's move on to the callbacks concerning the tracking process. The methods `onTargetRecognized` as well as `onRecognitionSuccessful` will be called when the `CloudTracker` first recognizes one of your targets. In this example we do not react on the `onTargetRecognized` call, because we do not care which of our targets were recognized, but again in a real world example you could prepare your renderer for the target to be tracked. The `onRecognitionSuccessful` method is unique to the `CloudTracker` and not available in the `ClientTracker` interface. It will be passed a `JSONObject` containing meta information you defined for this target when creating your Cloud Archive. For now we will just display the contents in a standard `Edittext` ui component so you can have a look.  After the call to `onTargetRecognized` the next calls will be to `onTracking`. On this calls the `CloudTracker` will pass an instance of the `RecognizedTarget` class containing information about the current target. Besides general information about the target like the name of the target and distance to the target, this object also contains matrices which define the location of the target in the current frame, we pass the object to our renderer instance so it can be used to render something on or around the target. If the 'CloudTracker' isn't able to track the current target any longer it will call the `onTargetLost` method. In this case we will remove the last `RecognizedTarget` object from our renderer since it won't be updated anymore until the `CloudTracker` recognizes a target again.  The last method `onRecognitionFailed` will be called if the last recognition attempt was unsuccessful, in this case we will display an error message to the user so that she/he tries again.  ```java     @Override     public void onTargetRecognized(final CloudTracker cloudTracker_, final String targetName_) {      }      @Override     public void onTracking(final CloudTracker cloudTracker_, final RecognizedTarget recognizedTarget_) {         _glRenderer.setCurrentlyRecognizedTarget(recognizedTarget_);     }      @Override     public void onTargetLost(final CloudTracker cloudTracker_, final String targetName_) {         _glRenderer.setCurrentlyRecognizedTarget(null);     }      @Override     public void onRecognitionSuccessful(final CloudTracker cloudTracker_, final JSONObject jsonObject_) {         if (jsonObject_.toString().length() &gt; 2) {             runOnUiThread(new Runnable() {                 @Override                 public void run() {                         EditText targetInformationTextField = (EditText) findViewById(R.id.on_click_cloud_tracking_target_information);                         targetInformationTextField.setText(jsonObject_.toString(), TextView.BufferType.NORMAL);                         targetInformationTextField.setVisibility(View.VISIBLE);                     }             });         }     }      @Override     public void onRecognitionFailed(final CloudTracker cloudTracker_, final int errorCode_, final String errorMessage_) {         Toast toast = Toast.makeText(getApplicationContext(), \&quot;Recognition failed!\&quot;, Toast.LENGTH_SHORT);         toast.show();     } ```  To be able to actually start the recognition we define a button and set an anonymous `OnClickListener` which calls the `CloudTracker` recognize method.  ```java @Override public void onRenderExtensionCreated(final RenderExtension renderExtension_) {     ...     Button recognizeButton = (Button) findViewById(R.id.on_click_cloud_tracking_recognize_button);     recognizeButton.setOnClickListener(new View.OnClickListener() {         @Override         public void onClick(final View view_) {             _cloudTracker.recognize();         }     });  }  ```  &lt;a id=\&quot;ContinuousCloudRecognition\&quot;&gt;&lt;/a&gt; "
});

documentTitles["cloudrecognitionnative.html#continuous-cloud-recognition"] = "Continuous Cloud Recognition";
index.add({
    url: "cloudrecognitionnative.html#continuous-cloud-recognition",
    title: "Continuous Cloud Recognition",
    body: "### Continuous Cloud Recognition  On-Click recognition is useful in some particular cases, but more often than not you probably want to use continuous recognition. For continuous cloud recognition we set an interval in which the `CloudTracker` automatically calls the recognize function.  Since we want to make sure the `CloudTracker` finished loading and is ready to be used before we start recognitions, we we'll use the `onTrackerFinishedLoading` callback to start the continuous recognition. To do that we call `startContinuousRecognition` on the `CloudTracker` instance passing an interval in milliseconds. Since mobile internet can be quite bad, we recommend an interval between 1500 and 2000ms.  ```java @Override public void onTrackerFinishedLoading(final CloudTracker cloudTracker_) {     cloudTracker_.startContinuousRecognition(1500); } ```  As already mentioned before internet quality isn't always the best on mobile devices. If the Wikitude SDK notices that the cloud recogntion interval was set to low, the `onRecognitionInterruption` callback method will be called. The SDK will pass an adjusted interval which should be more appropriate for the current connection speed. In our example we'll reset the `CloudTracker` interval by calling `startContinuousRecognition` passing the suggested interval.  ```java @Override public void onRecognitionInterruption(final CloudTracker cloudTracker_, final double suggestedInterval_) {     cloudTracker_.startContinuousRecognition(suggestedInterval_); } ```     "
});



documentTitles["renderingnative.html#rendering"] = "Rendering";
index.add({
    url: "renderingnative.html#rendering",
    title: "Rendering",
    body: "## Rendering  This example shows and explain how rendering works in combination with the Wikitude SDK Native API. There are two methods of rendering available in the Wikitude Native SDK. We call them internal and external rendering. Internal means the OpenGL view is setup by the Wikitude SDK and the SDK user can define custom rendering, that is executed by the Wikitude SDK. On the other hand external rendering means the SDK user sets up the OpenGL view and integrates the Wikitude SDK into this rendering setup.    &lt;a id=\&quot;externalrendering\&quot;&gt;&lt;/a&gt; "
});

documentTitles["renderingnative.html#external-rendering"] = "External Rendering";
index.add({
    url: "renderingnative.html#external-rendering",
    title: "External Rendering",
    body: "### External Rendering  To activate external rendering you need to pass an object implementing the `ExternalRendering` interface to the constructor of the `WikitudeSDK` class. In the following example this object will be an instance of the `ExternalRenderingActivity` class which you can find in our sample application under the package `com.wikitude.samples.rendering.external`.  ```java public class ExternalRenderingActivity extends Activity implements ClientTrackerEventListener, ExternalRendering {      private WikitudeSDK _wikitudeSDK;     ...      @Override     protected void onCreate(Bundle savedInstanceState) {         super.onCreate(savedInstanceState);         _wikitudeSDK = new WikitudeSDK(this); ```  In the method `onRenderExtensionCreated` which is defined by the `ExternalRendering` interface we receive a `RenderExtension` instance as a parameter. We pass that parameter to our OpenGL renderer which extends `GLSurfaceView.Renderer`. We also create a `Driver` which calls the Renderer 30 times per second to draw the current frame.   ```java     @Override     public void onRenderExtensionCreated(final RenderExtension renderExtension_) {         _glRenderer = new GLRenderer(renderExtension_);         _view = new CustomSurfaceView(getApplicationContext(), _glRenderer);         _driver = new Driver(_view, 30);         setContentView(_view);     } ```  The following code shows a very basic implementation of a GLSurfaceView.Renderer. Please note that the first thing to do in every method is to call the WikitudeSDK RenderExtension, otherwise the `WikitudeSDK` won't be able to render the camera frame or perform any image recognition.  ```java public class GLRenderer implements GLSurfaceView.Renderer, RenderExtension {      private RenderExtension _wikitudeRenderExtension = null;     private RecognizedTarget _currentlyRecognizedTarget = null;     private StrokedRectangle _strokedRectangle;      public GLRenderer(RenderExtension wikitudeRenderExtension_) {         _wikitudeRenderExtension = wikitudeRenderExtension_;     }      @Override     public void onDrawFrame(final GL10 unused) {         if (_wikitudeRenderExtension != null) {             _wikitudeRenderExtension.onDrawFrame(unused);         }         if (_currentlyRecognizedTarget != null) {             _strokedRectangle.onDrawFrame(_currentlyRecognizedTarget);         }     }      @Override     public void onSurfaceCreated(final GL10 unused, final EGLConfig config) {         if (_wikitudeRenderExtension != null) {             _wikitudeRenderExtension.onSurfaceCreated(unused, config);         }         _strokedRectangle = new StrokedRectangle();     }      @Override     public void onSurfaceChanged(final GL10 unused, final int width, final int height) {         if (_wikitudeRenderExtension != null) {             _wikitudeRenderExtension.onSurfaceChanged(unused, width, height);         }     }      public void onResume() {         if (_wikitudeRenderExtension != null) {             _wikitudeRenderExtension.onResume();         }     }      public void onPause() {         if (_wikitudeRenderExtension != null) {             _wikitudeRenderExtension.onPause();         }     }      public void setCurrentlyRecognizedTarget(final RecognizedTarget currentlyRecognizedTarget_) {         _currentlyRecognizedTarget = currentlyRecognizedTarget_;     }  } ```  &lt;a id=\&quot;internalrendering\&quot;&gt;&lt;/a&gt; "
});

documentTitles["renderingnative.html#internal-rendering"] = "Internal Rendering";
index.add({
    url: "renderingnative.html#internal-rendering",
    title: "Internal Rendering",
    body: "### Internal Rendering  To activate internal rendering you need to pass an object implementing the `InternalRendering` interface to the constructor of the `WikitudeSDK` class. In the following example this object will be an instance of the `InternalRenderingActivity` which you can find in our sample application under the package `com.wikitude.samples.rendering.internal`.  ```java public class InternalRenderingActivity extends Activity implements InternalRendering, ClientTrackerEventListener { 	...     private WikitudeSDK _wikitudeSDK;     ...     @Override     protected void onCreate(final Bundle savedInstanceState) {         super.onCreate(savedInstanceState);         _wikitudeSDK = new WikitudeSDK(this);        	... ```  In the method `provideRenderExtension` which is defined by the `InternalRendering` interface we create an instance of our `CustomRenderExtension` and return it.  ```java     @Override     public RenderExtension provideRenderExtension() {         _renderExtension = new CustomRenderExtension();         return _renderExtension;     } ```  The CustomRenderExtension was defined like in the following code snippet. All defined methods will be called in the appropriate methods of the `WikitudeSDK` renderer which extends the standard Android `GLSurfaceView.Renderer`.  ```java public class CustomRenderExtension implements GLSurfaceView.Renderer, RenderExtension {      private RecognizedTarget _currentlyRecognizedTarget = null;     private StrokedRectangle _strokedRectangle;      @Override     public void onDrawFrame(final GL10 unused) {         if (_currentlyRecognizedTarget != null) {             _strokedRectangle.onDrawFrame(_currentlyRecognizedTarget);         }     }      @Override     public void onSurfaceCreated(final GL10 unused, final EGLConfig config) {         _strokedRectangle = new StrokedRectangle();     }      @Override     public void onSurfaceChanged(final GL10 unused, final int width, final int height) {     }      public void onResume() {     }      public void onPause() {     }      public void setCurrentlyRecognizedTarget(final RecognizedTarget currentlyRecognizedTarget_) {         _currentlyRecognizedTarget = currentlyRecognizedTarget_;     }  } ```     "
});



documentTitles["pluginsapi.html#plugins-api"] = "Plugins API";
index.add({
    url: "pluginsapi.html#plugins-api",
    title: "Plugins API",
    body: "## Plugins API  This guide consists of multiple sections, first we discuss Wikitude SDK Plugins in general, than we talk about platform specifics and how to register a plugin with the Wikitude SDK and then we go through each of the sample plugins included with the Wikitude Example Applications.  1. [About Wikitude SDK Plugins](#about) 2. [Platform Specifics](#platformspecifics) 3. [Registering Plugins](#registerplugin) 4. [QR &amp; Barcode Plugin](#barcode) 5. [Face Detection Plugin](#facedetection)  &lt;a id=\&quot;about\&quot;&gt;&lt;/a&gt; "
});

documentTitles["pluginsapi.html#about-wikitude-sdk-plugins"] = "About Wikitude SDK Plugins";
index.add({
    url: "pluginsapi.html#about-wikitude-sdk-plugins",
    title: "About Wikitude SDK Plugins",
    body: "### About Wikitude SDK Plugins  Technically a plugin is a class, either written in C++ or Java, that is derived from the Wikitude Plugin base class. Beside lifecycle handling and options to enable and disable the plugin, the Plugin class has four main methods that you can override `cameraFrameAvailable` which is called each time the camera has a new frame, `update` which is called after each image recogntion cycle as well as 'startRender' and 'endRender' which are called before and after the Wikitude SDK does its rendering.  The most important thing to remember when working with plugins is that they need to have a unique identifier! If the attempt is made to register a plugin with an identifier that is already known to the Wikitude SDK, the register method call will return false.  "
});

documentTitles["pluginsapi.html#plugin-base-class"] = "Plugin Base Class";
index.add({
    url: "pluginsapi.html#plugin-base-class",
    title: "Plugin Base Class",
    body: "### Plugin Base Class ``` class Plugin {    public:       Plugin(std::string identifier_);       ~Plugin();       string getIdentifier() const; // returns a unique plugin identifier       bool processesColorCameraFrames(); // returns true if the plugins wants to process color frames instead of bw         void setEnabled(bool enabled_);       bool isEnabled();         string callJavaScript(string javaScriptSnippet); // evaluates the given JavaScript snippet in the currently loaded ARchitect World context.      protected:       void initialize(); // called when the plugin is initially added to the Wikitude SDK       void pause(); // called when the Wikitude SDK is paused e.g. the application state changes from active to background       void resume(uint pausedTime_); // called when the Wikitude SDK resumes e.g. from background to active state. pausedTime represents the time in milliseconds that the plugin was not updated.       void destroy(); // called when the plugin is removed from the Wikitude SDK         void cameraFrameAvailable(const Frame&amp;; cameraFrame_); // called each time the camera has a new frame       void update(const vector&lt;RecognizedTarget&gt; recognizedTargets_); // called each time the Wikitude SDK renders a new frame        void startRender(); // called before any Wikitude SDK internal rendering is done       void endRender(); // called right after any Wikitude SDK internal rendering is done     protected:       string      _identifier;       bool        _enabled; };   ```  With those methods in place your plugin will be able to read the full camera image for your own purpose, where the YUV image is also processed in wikitude’s computer vision engine.  "
});

documentTitles["pluginsapi.html#information-about-recognized-targets"] = "Information about Recognized Targets";
index.add({
    url: "pluginsapi.html#information-about-recognized-targets",
    title: "Information about Recognized Targets",
    body: "### Information about Recognized Targets  In case you have the wikitude SDK running with ongoing image recognition, the plugin API will populate the `RecognizedTarget` in the `update` method once an image has been recognized. The plugin can then work with class RecognizedTarget, which wraps the details of the target image in the camera view. With that you can read out the pose of the target image and use it for your purposes. Additionally the call contains the calculated distance to the recognized target  ``` class RecognizedTarget {    public:       const string&amp;    getIdentifier() const; // the identifier of the target. The identifier is defined when the target is added to a target collection       const Mat4&amp;      getModelViewMatrix() const; // the model view matrix that defines the transformation of the target in the camera frame (translation, rotation, scale)       const Mat4&amp;      getProjectionMatrix() const;       const float      getDistanceToCamera() const; // represents the distance from the target to the camera in millimeter };  ```  Passing values from within the plugin to the JavaScript part of your augmented reality experience is done via the `addToJavaScriptQueue()` method of the Plugin class. Using this function will execute any JavaScript code in the context of your augmented reality experience.  &lt;a id=\&quot;platformspecifics\&quot;&gt;&lt;/a&gt; "
});

documentTitles["pluginsapi.html#platform-specifics"] = "Platform Specifics";
index.add({
    url: "pluginsapi.html#platform-specifics",
    title: "Platform Specifics",
    body: "### Platform Specifics   To be able to use a C++ Wikitude plugin on Android, it is necessary to create a binary from the C++ code for each supported CPU architecture. To make this process as easy as possible we prepared an Android NDK make file and and some template code which passes your plugin to the Wikitude SDK. In the following section we discuss how you need to adapt these templates so they'll work for your plugin.   Please note that if you would like to use multiple C++ plugins in your app, you will need to package all plugins in one shared library. This is necessary because we use JNI to register C++ plugins with the Wikitude SDK and the symbol to do that has to be unique.  "
});

documentTitles["pluginsapi.html#android-c-wikitude-plugin-library-build"] = "Android C++ Wikitude Plugin Library Build";
index.add({
    url: "pluginsapi.html#android-c-wikitude-plugin-library-build",
    title: "Android C++ Wikitude Plugin Library Build",
    body: "### Android C++ Wikitude Plugin Library Build  All files needed are located under the folder PluginBuilder in the Wikitude SDK Android package. If you didn't setup the Android NDK yet, please follow the &lt;a href=\&quot;https://developer.android.com/intl/ja/ndk/guides/setup.html\&quot;&gt;official guide&lt;/a&gt;.  Let's take a look at the Android.mk file, located under `SDKPackageRoot/PluginBuilder/jni`. The first thing we do is declare a variable containing the path to the source files relative to the make files location and set `LOCAL_PATH` to this location. We define where all include files are located and which files need to be compiled. Since our Example Plugin uses Android log we link android native log.  ``` LOCAL_PATH := $(call my-dir)/.. SRC_DIR := $(LOCAL_PATH)/src  include $(CLEAR_VARS)  LOCAL_PATH := $(SRC_DIR) include $(CLEAR_VARS)  LOCAL_MODULE := samplePlugin  LOCAL_C_INCLUDES := $(SRC_DIR) LOCAL_SRC_FILES := __YOUR_PLUGIN__.cpp JniRegistration.cpp Plugin.cpp  LOCAL_LDLIBS += -llog  include $(BUILD_SHARED_LIBRARY) ```  The PluginLoader/src folder contains various src files which are needed so your plugin will compile and link correctly. Please don't modify any of them except the `__YOUR_PLUGIN__.h` and `__YOUR_PLUGIN__.cpp`. One other file that needs some slight modifications is `JniRegistration.cpp` shown below. Adapt the include directive and the constructor call to your plugin name and if you would like to use multiple C++ plugins, feel free to add more plugins to the `cPluginsArray` array but adjust the `numberOfPlugins` count accordingly.  If you packaged multiple plugins in one shared library but would like to instantiate only a subset of those plugins you can pass an identifier to this method when loading the library from Java. You can then decide which plugins to create depending on the value of `jPluginName`.  ``` #include &lt;jni.h&gt;  #include \&quot;Plugin.h\&quot; #include \&quot;__YOUR_PLUGIN__.h\&quot;  extern \&quot;C\&quot; JNIEXPORT jlongArray JNICALL Java_com_wikitude_architect_PluginManager_createNativePlugins(JNIEnv *env, jobject thisObj, jstring jPluginName) {          int numberOfPlugins = 1;          jlong cPluginsArray[numberOfPlugins];     cPluginsArray[0] = (jlong) new __YOUR_PLUGIN__(\&quot;com.example.plugin\&quot;);          jlongArray jPluginsArray = env-&gt;NewLongArray(numberOfPlugins);     if (jPluginsArray != nullptr) {         env-&gt;SetLongArrayRegion(jPluginsArray, 0, numberOfPlugins, cPluginsArray);     }          return jPluginsArray; } ```  To build the plugin binary files, navigate to the jni folder and call ndk-build. A libs folder will be created containing libraries for arm7, arm64 and intel. Copy the contents of the libs folder to `YourProjectRoot/app/src/main/jniLibs`.        &lt;a id=\&quot;registerplugin\&quot;&gt;&lt;/a&gt; "
});

documentTitles["pluginsapi.html#registering-plugins"] = "Registering Plugins";
index.add({
    url: "pluginsapi.html#registering-plugins",
    title: "Registering Plugins",
    body: "### Registering Plugins   "
});

documentTitles["pluginsapi.html#register-c-plugin"] = "Register C++ Plugin";
index.add({
    url: "pluginsapi.html#register-c-plugin",
    title: "Register C++ Plugin",
    body: "### Register C++ Plugin  To register a C++ plugin with the Wikitude Native SDK, get the `PluginManager` from the `WikitudeSDK` instance and call `registerNativePlugin` passing the name of your library. Do not add `lib` in front of the name or add the `.so` extension. If you register your Plugin in the `onCreate` method of your activity, please also make sure to call the `onCreate` method of the `WikitudeSDK` first. The following snippet comes from the `BarcodePluginActivity` of the Wikitude Native SDK Example application.  ```java @Override protected void onCreate(Bundle savedInstanceState) { 	...     _wikitudeSDK.onCreate(getApplicationContext(), startupConfiguration);     ...     _wikitudeSDK.getPluginManager().registerNativePlugins(\&quot;barcodePlugin\&quot;); } ```  "
});

documentTitles["pluginsapi.html#register-java-plugin"] = "Register Java Plugin";
index.add({
    url: "pluginsapi.html#register-java-plugin",
    title: "Register Java Plugin",
    body: "### Register Java Plugin  To register a Java plugin with the Wikitude Native SDK, get the `PluginManager` from the `WikitudeSDK` instance and call `registerPlugin` passing an instance of your `Plugin`.  ```java @Override protected void onCreate(Bundle savedInstanceState) { 	...     _wikitudeSDK.onCreate(getApplicationContext(), startupConfiguration);     ...     _wikitudeSDK.getPluginManager().registerPlugin(new MyPlugin()); } ```        &lt;a id=\&quot;barcode\&quot;&gt;&lt;/a&gt; "
});

documentTitles["pluginsapi.html#barcode-and-qr-code-reader"] = "Barcode and QR code reader";
index.add({
    url: "pluginsapi.html#barcode-and-qr-code-reader",
    title: "Barcode and QR code reader",
    body: "### Barcode and QR code reader  This samples shows a full implementation of the popular barcode library ZBar into the Wikitude SDK. As ZBar is licensed under LGPL2.1 this sample can also be used for other projects.  ZBar is an open source software suite for reading bar codes from various sources, such as video streams, image files and raw intensity sensors. It supports many popular symbologies (types of bar codes) including EAN-13/UPC-A, UPC-E, EAN-8, Code 128, Code 39, Interleaved 2 of 5 and QR Code.        In the `BarcodePluginActivity.onCreate` method we register the bar code C++ plugin by getting the `PluginManager` from the Wikitude SDK and calling `registerNativePlugins` passing the name of the native library containing our C++ plugin. Right after that we call initNative(), which we declared as a native method and implement in the C++ plugin, to initialize the JavaVM pointer hold by the native plugin. We also implement the method `onBarcodeDetected` to display the contents of the scanned bar code. We'll later call this method from the bar code plugin.   ```java public class BarcodePluginActivity extends Activity implements ClientTrackerEventListener, ExternalRendering {      private static String _codeContent;     ...      @Override     protected void onCreate(Bundle savedInstanceState) {         ...         _wikitudeSDK.getPluginManager().registerNativePlugins(\&quot;barcodePlugin\&quot;);         initNative();     }      ...      public void onBarcodeDetected(final String codeContent_) {         _codeContent = codeContent_;         runOnUiThread(new Runnable() {             @Override             public void run() {                 EditText targetInformationTextField = (EditText) findViewById(R.id.barcode_plugin_info_field);                 targetInformationTextField.setText(codeContent_, TextView.BufferType.NORMAL);                 targetInformationTextField.setVisibility(View.VISIBLE);             }         });     }      private native void initNative(); } ```  Now let's move to the plugins C++ code. First we'll have a look at the `BarcodePlugin.h` file. To create the bar code plugin we derive our `BarcodePlugin` class from `wikitude::sdk::Plugin` and override `initialize`, `destroy`, `cameraFrameAvailable` and `update`. We also declare the following member variables: `_worldNeedsUpdate`, `_image`, `_imageScanner` and `_methodId`. The `_worldNeedsUpdate` variable will later be used as an indicator if we need to update the `View`, `_image` and `_imageScanner` are classes from `zBar` which we'll use to scan for bar codes and `_methodId` will hold the method id of the `onBarcodeDetected` Java method.   ```c++ extern JavaVM* pluginJavaVM;  class BarcodePlugin : public wikitude::sdk::Plugin { public:     BarcodePlugin(int cameraFrameWidth, int cameraFrameHeight);     virtual ~BarcodePlugin();      virtual void initialize();     virtual void destroy();      virtual void cameraFrameAvailable(const wikitude::sdk::Frame&amp; cameraFrame_);     virtual void update(const std::list&lt;wikitude::sdk::RecognizedTarget&gt;&amp; recognizedTargets_);   protected:     int                             _worldNeedsUpdate;          zbar::Image                     _image;     zbar::ImageScanner              _imageScanner;      private:     jmethodID                       _methodId; }; ```  We declare two variables in the global namespace one which will hold a pointer to the JavaVM and one which will hold a reference to our activity. To initialize those two variables we declared the `initNative` native method in the `BarcodeActivity` and implement it like in the following code snippet. All we do is get the pointer to the `JavaVM` from the `JNIEnv` and create a new global reference to the calling activity instance.  ```c++ JavaVM* pluginJavaVM; jobject activityObj;  extern \&quot;C\&quot; JNIEXPORT void JNICALL Java_com_wikitude_samples_plugins_BarcodePluginActivity_initNative(JNIEnv* env, jobject obj) {     env-&gt;GetJavaVM(&amp;pluginJavaVM);     activityObj = env-&gt;NewGlobalRef(obj); } ``` In the constructor we set `_worldNeedsUpdate` to zero indicating that there is no update necessary and initialize the `zBar::Image` member variable passing its constructor the width and height of the camera frame, the image format of `Y800`, set its data pointer to null and the data length to zero. We use the JavaVM to create an instance of `JavaVMResource` which is a helper class to manage the JavaVM, we provided in the file `jniHelper.cpp`. Next we get the Java environment from the `JavaVMResource` and initialize the `_methodId` member. In the destructor we delete the global reference to the activity object. ```c++ BarcodePlugin::BarcodePlugin(int cameraFrameWidth, int cameraFrameHeight) : Plugin(\&quot;com.wikitude.ios.barcodePluign\&quot;), _worldNeedsUpdate(0), _image(cameraFrameWidth, cameraFrameHeight, \&quot;Y800\&quot;, nullptr, 0) {     JavaVMResource vm(pluginJavaVM);     jclass clazz = vm.env-&gt;FindClass(\&quot;com/wikitude/samples/plugins/BarcodePluginActivity\&quot;);     _methodId = vm.env-&gt;GetMethodID(clazz, \&quot;onBarcodeDetected\&quot;, \&quot;(Ljava/lang/String;)V\&quot;); }  BarcodePlugin::~BarcodePlugin() {     JavaVMResource vm(pluginJavaVM);     vm.env-&gt;DeleteGlobalRef(activityObj); } ``` In the `initialize` method we configure the `zbar::ImageScanner` by calling `setConfig`, enabling all supported bar codes. If you are only interested in one or some particular types of codes, first disabling all bar code types and manually enabling each particular type would be the better idea. That way performance could be greatly improved.  ```c++ void BarcodePlugin::initialize() {         _imageScanner.set_config(zbar::ZBAR_NONE, zbar::ZBAR_CFG_ENABLE, 1); } ``` We react to the `destroy` event by setting the current data pointer of the `zbar::Image` member to null and length to zero.  ```c++ void BarcodePlugin::destroy() {     _image.set_data(nullptr, 0); } ``` The last but most interesting methods are `cameraFrameAvailable` and `update`. In the `cameraFrameAvailable` method we set the data of our previously initialized `zbar::Image` member variable to the frame data we just received and the length of the data to frame width * frame height by calling `set_data`. We then start the scanning process by calling the `scan` method of our `zBar::ImageScanner` passing the `zBar::Image` member instance. The `zBar::ImageScanner::scan` method returns the number of detected bar codes in the image frame, we save this number in a local variable `n`. If `n` is not equal to the result of the last frame, which we saved to `_worldNeedsUpdate` member variable, we know there was a new bar code detected (meaning there was no bar code in the last frame) or that there was a bar code in the last frame and now there isn't. When that's the case, we do another check if there really was a bar code detected this frame and if there was we call the `onBarcodeDetected` Java method passing the code content. ```c++ void BarcodePlugin::cameraFrameAvailable(const wikitude::sdk::Frame&amp; cameraFrame_) {     int frameWidth = cameraFrame_.getSize().width;     int frameHeight = cameraFrame_.getSize().height;          _image.set_data(cameraFrame_.getLuminanceData(), frameWidth * frameHeight);          int n = _imageScanner.scan(_image);          if ( n != _worldNeedsUpdate ) {         if ( n ) {                          zbar::Image::SymbolIterator symbol = _image.symbol_begin();             JavaVMResource vm(pluginJavaVM);             jstring codeContent = vm.env-&gt;NewStringUTF(symbol-&gt;get_data().c_str());             vm.env-&gt;CallVoidMethod(activityObj, _methodId, codeContent);          }     }          _worldNeedsUpdate = n; } ```    &lt;a id=\&quot;facedetection\&quot;&gt;&lt;/a&gt; "
});

documentTitles["pluginsapi.html#face-detection"] = "Face Detection";
index.add({
    url: "pluginsapi.html#face-detection",
    title: "Face Detection",
    body: "### Face Detection  This samples shows how to add face detection to your Wikitude augmented reality experience using OpenCV.        The Face Detection Plugin Example consists of the C++ classes `FaceDetectionPlugin`, `FaceDetectionPluginConnector` and the Java class `FaceDetectionPluginActivity`. We will use OpenCV to detect faces in the current camera frame and OpenGL calls in Java to render a frame around detected faces.   The `FaceDetectionPluginConnector` acts as our interface between native code and Java and contains some JNI code, since JNI is not the focus of this example we won't go into detail about the implementation. If you would like to have a look at the complete code feel free to browse the source code in the Wikitude SDK release package.  We implement to Java native methods `initNative` and `setFlipFlag`. First will be used to initialize the plugin with the path to an OpenCV database, second will be used to notify the Plugin about orientation changes of the device. The other methods `faceDetected`, `faceLost`, `projectionMatrixChanged` and `renderDetectedFaceAugmentation` will be called by the Plugin to update the Java Android Activity, which controls the rendering.   ```c++ extern \&quot;C\&quot; JNIEXPORT void JNICALL Java_com_wikitude_samples_plugins_FaceDetectionPluginActivity_initNative(JNIEnv* env, jobject obj, jstring databasePath_) {     ... }  extern \&quot;C\&quot; JNIEXPORT void JNICALL Java_com_wikitude_samples_plugins_FaceDetectionPluginActivity_setFlipFlag(JNIEnv* env, jobject obj, jint flag) {     ... }  ... ctor / dtor ...  void FaceDetectionPluginConnector::faceDetected(const float *modelViewMatrix) { ... }  void FaceDetectionPluginConnector::faceLost() { ... }  void FaceDetectionPluginConnector::projectionMatrixChanged(const float *projectionMatrix) { ... }  void FaceDetectionPluginConnector::renderDetectedFaceAugmentation() { ... } ```  Next we have a look at the `FaceDetectionPlugin` class. Again we we will leave out implementation details and focus on how we use the plugin itself. In the `cameraFrameAvailable` method we use OpenCV to detect faces in the current camera frame which the Wikitude SDK passes to the plugin. We call the observer which is an instance of the `FaceDetectionPluginConnector` to notify the Java activity about the result. The plugin base class defines `startRender` and `endRender`, depending on, if you would like to render on top of or below of all rendering the Wikitude SDK does, you choose one of them, or both to override. To render below all Wikitude rendering we choose `startRender` and again call the `FaceDetectionPluginConnector` instance which in turn calls the Android activity. Since we do not react on the result of the Wikitude SDK image recognition we leave `update` blank.   ```c++  ... ctor/dtor ...  void FaceDetectionPlugin::cameraFrameAvailable(const wikitude::sdk::Frame&amp; cameraFrame_) {      ... Control Open CV ...      if ( _result.size() ) {         convertFaceRectToModelViewMatrix(croppedImg, _result.at(0));         _observer-&gt;faceDetected(_modelViewMatrix);     } else {         _observer-&gt;faceLost();     } }  void FaceDetectionPlugin::startRender() {     _observer-&gt;renderDetectedFaceAugmentation(); }  void FaceDetectionPlugin::update(const std::list&lt;wikitude::sdk::RecognizedTarget&gt; &amp;recognizedTargets_) { }  ... other internally used methods ...  ```  In the `FaceDetectionPluginActivity` we override `onCreate` and initialize the Plugin by calling the initNative native method, passing the path to the database file. We also override `onConfigurationChanged` to get notify about device orientation changes and again notify the Plugin about orientation changes by calling the `setFlipFlag` native method. To render a frame around detected faces we created an instance of `GLRendererFaceDetectionPlugin` class which takes care of rendering a rectangle around faces and all targets of the also active `ClientTracker`. When the plugin detects, looses or recalculated the projection matrix it will call the appropriate Java methods which we use to update the `Renderer` instance. If the Plugin decides it is time to render a frame around a detected face it will call `renderDetectedFaceAugmentation`. Since the plugin will only call this method in the `startRender` method, we know the current thread is the OpenGL thread and are able to dispatch OpenGL calls.  ```java  ... imports ...  public class FaceDetectionPluginActivity extends Activity implements ClientTrackerEventListener, ExternalRendering {          private WikitudeSDK _wikitudeSDK;     private GLRendererFaceDetectionPlugin _glRenderer;     private File _cascadeFile;     private RecognizedTarget _faceTarget = new RecognizedTarget();      ...      @Override     protected void onCreate(Bundle savedInstanceState) {          ... init native sdk ...          ... copy database file ...          initNative(_cascadeFile.getAbsolutePath());          ...          setInterfaceOrientationInPlugin();     }      ... other lifecycle events ...      private void setInterfaceOrientationInPlugin() {         ...         setFlipFlag(x);         ...     }      @Override     public void onConfigurationChanged(Configuration newConfig) {         super.onConfigurationChanged(newConfig);         setInterfaceOrientationInPlugin();     }      public void onFaceDetected(float[] modelViewMatrix) {         _faceTarget.viewMatrix = modelViewMatrix;         _glRenderer.setCurrentlyRecognizedFace(_faceTarget);     }      public void onFaceLost() {         _glRenderer.setCurrentlyRecognizedFace(null);     }      public void onProjectionMatrixChanged(float[] projectionMatrix) {         _faceTarget.projectionMatrix = projectionMatrix;         _glRenderer.setCurrentlyRecognizedFace(_faceTarget);     }      ... other Wikitude callbacks ...      private native void initNative(String casecadeFilePath);     private native void setFlipFlag(int flag); }```  If you are interested in the implementation details of the `FaceDetectionPluginActivity` or the `StrokedRectangle` class, you can find both classes in our Wikitude SDK Example Application.  "
});



documentTitles["hardwarecontrolnative.html#camera-controls"] = "Camera Controls";
index.add({
    url: "hardwarecontrolnative.html#camera-controls",
    title: "Camera Controls",
    body: "## Camera Controls  The `CameraManager` allows you to switch between front and back camera, continuous focus and one time focus as well as control the zoom. We created a `activity_camera_control.xml` layout file, were we define some simple ui components for all exposed settings, please browse the sample app code if you would like to have a look at this file.  With the layout file in place we are ready to connect the UI components and the `CameraManager`.   The first component we connect is the flash light on/off switch, were we set a anonymous `OnCheckedChangeListener` in which we retrieve the `CameraManager` from the WikitudeSDK and enable or disable the flash light by calling `enableCameraFlash` or `disableCameraFlash`.   For the zoom `SeekBar` we first set the maximum value of the `SeekBar` to the maximum zoom value returned by the `CameraManager`, to create a wider range of values we multiply the returned value by 100. Then again we set a anonymous Listener to react on the user input. Since we widened the value range, we need to divide the current `Seekbar` value by 100 before we pass it back to the `CameraManager` by calling `setZoomLevel`.  ```java     @Override     public void onRenderExtensionCreated(final RenderExtension renderExtension_) {      	...          Switch flashToggleButton = (Switch) findViewById(R.id.flashlight);         flashToggleButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {             @Override             public void onCheckedChanged(final CompoundButton buttonView, final boolean isChecked) {                 if (isChecked) {                     _wikitudeSDK.getCameraManager().enableCameraFlashLight();                 } else {                     _wikitudeSDK.getCameraManager().disableCameraFlashLight();                 }              }         });          SeekBar zoomSeekBar = (SeekBar) findViewById(R.id.zoomSeekBar);         zoomSeekBar.setMax(((int) _wikitudeSDK.getCameraManager().getMaxZoomLevel()) * 100);         zoomSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {             @Override             public void onProgressChanged(final SeekBar seekBar, final int progress, final boolean fromUser) {                 if (progress &gt; 0) {                     _wikitudeSDK.getCameraManager().setZoomLevel((float) progress / 100.0f);                 }             }              @Override             public void onStartTrackingTouch(final SeekBar seekBar) {              }              @Override             public void onStopTrackingTouch(final SeekBar seekBar) {              }         }); ```  Since we use two `Spinners` to control the camera position and focus mode, we don't go with anonymous listeners, but let the activity implement `onItemSelectedListener` and handle both spinners in the same method. For both focus mode and camera position `CameraManager` exposes setters to pick a value. We use the appropriate `enums` provided by the `CameraSettings` class to choose from the available settings.  ```java     @Override     public void onRenderExtensionCreated(final RenderExtension renderExtension_) {          ...          Spinner cameraPositionSpinner = (Spinner) findViewById(R.id.cameraPosition);         ArrayAdapter&lt;CharSequence&gt; adapter = ArrayAdapter.createFromResource(this, R.array.camera_positions, android.R.layout.simple_spinner_item);         adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);         cameraPositionSpinner.setAdapter(adapter);         cameraPositionSpinner.setOnItemSelectedListener(this);          Spinner focusModeSpinner = (Spinner) findViewById(R.id.focusMode);         adapter = ArrayAdapter.createFromResource(this, R.array.focus_mode, android.R.layout.simple_spinner_item);         adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);         focusModeSpinner.setAdapter(adapter);         focusModeSpinner.setOnItemSelectedListener(this);     }      @Override     public void onItemSelected(final AdapterView&lt;?&gt; adapterView_, final View view_, final int position, final long id) {         switch (adapterView_.getId()) {             case R.id.focusMode:                 if (position == 0) {                     _wikitudeSDK.getCameraManager().setFocusMode(CameraSettings.CameraFocusMode.CONTINUOUS);                 } else {                     _wikitudeSDK.getCameraManager().setFocusMode(CameraSettings.CameraFocusMode.ONCE);                 }                 break;             case R.id.cameraPosition:                 if (position == 0) {                     _wikitudeSDK.getCameraManager().setCameraPosition(CameraSettings.CameraPosition.BACK);                 } else {                     _wikitudeSDK.getCameraManager().setCameraPosition(CameraSettings.CameraPosition.FRONT);                 }                 break;         }     } ```   "
});



documentTitles["toolsnative.html#wikitude-2d-tracking"] = "Wikitude 2D Tracking";
index.add({
    url: "toolsnative.html#wikitude-2d-tracking",
    title: "Wikitude 2D Tracking",
    body: "# Wikitude 2D Tracking  In this section of the documentation we are covering tools shipped with the Wikitude SDK, which help you in your development.   3. [Target Manager](targetmanagement.html#target-management) 4. [Best practice for target images](targetguide.html) "
});



documentTitles["targetmanagement.html#target-management"] = "Target Management";
index.add({
    url: "targetmanagement.html#target-management",
    title: "Target Management",
    body: "## Target Management   This guide gives you an overview of how to create a target collection that you can use to detect and track images within your augmented reality experience.  In general the conversion can be done via three different tools:  1. Web Target Manager Tool: A browser based tool to convert your images to a wtc file. You can find the tool under:  &lt;a href=\&quot;https://targetmanager.wikitude.com\&quot; target=\&quot;_blank\&quot;&gt;https://targetmanager.wikitude.com&lt;/a&gt;. You need your free developer account to log-in. This tool is described in more detail on further below 2. RESTful API. Make use of all features provided by the web tool via direct server endpoints. 3. Targets Enterprise Script: A binary shell script available for Mac OS X and Linux converting images to target collections. Pleases [contact Wikitude Sales](mailto:sales@wikitude.com) team for technical requirements and pricing.  The following images describes the relationship between the above mentioned methods and the Wikitude Cloud Recognition Service, which is not scope of this documentation.   &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/150212_WT_Infografik_OfflineOnlineRecognition_01.jpg\&quot;&gt;   "
});

documentTitles["targetmanagement.html#web-targetmanager"] = "Web Targetmanager";
index.add({
    url: "targetmanagement.html#web-targetmanager",
    title: "Web Targetmanager",
    body: "### Web Targetmanager  "
});

documentTitles["targetmanagement.html#add-a-new-project"] = "Add a new project";
index.add({
    url: "targetmanagement.html#add-a-new-project",
    title: "Add a new project",
    body: "### Add a new project  - Open &lt;a href=\&quot;https://targetmanager.wikitude.com\&quot; target=\&quot;_blank\&quot;&gt;https://targetmanager.wikitude.com&lt;/a&gt; and login with your Wikitude Developer account - Add a new project to your project collection  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_CreateProject.png\&quot;&gt;  "
});

documentTitles["targetmanagement.html#add-target-images"] = "Add target images";
index.add({
    url: "targetmanagement.html#add-target-images",
    title: "Add target images",
    body: "### Add target images  - Enter an existing project  - Add new target images to the project either by clicking on `Add Targets` or drag  &amp; drop them on the empty area. Supported file formats include PNG and JPEG. If you are using PNG images, please make sure that it does not contain any transparent pixels, only solid colored images are supported.  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_AddTargets.png\&quot;&gt;	  - When uplaoding a target the file name is used as `target name`. It identifies a target in your experience. If the `target name` is not completely visible, hover over it to reveal the full name or double click the target to enter edit-mode.  &lt;div class=\&quot;warning\&quot;&gt; **Important** &lt;br /&gt; If you add your own target images  you need the target name to set them in  [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).&lt;/div&gt;   "
});

documentTitles["targetmanagement.html#star-rating"] = "Star Rating";
index.add({
    url: "targetmanagement.html#star-rating",
    title: "Star Rating",
    body: "### Star Rating - **0 stars:** Not suitable for tracking. This target image cannot be tracked because it lacks textured features with high local contrast. Please consider choosing another target image. - **1 star:**  Limited tracking ability. This target image provides basic tracking performance in good lightning conditions. Please consider improving the image - **2 stars:** Good tracking ability. This target image will track well in most conditions. - **3 stars:** Very good tracking ability. This target image will track very well in most conditions.  General advice for reference images  - Good image characteristics: 	- Diversely textured image with high local contrast - Bad image characteristics: 	- Large areas with solid color or smooth color transitions 	- Repetitive patterns 	- Logos, signs		  "
});

documentTitles["targetmanagement.html#create-a-wtc-file"] = "Create a WTC file";
index.add({
    url: "targetmanagement.html#create-a-wtc-file",
    title: "Create a WTC file",
    body: "### Create a WTC file  - AR.ClientTracker requires a WTC (Wikitude Target Collection) file which contains all information of the targets that should be recognized. Enter the project you need the file for and click the *WTC icon* in the toolbar.  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_CreateTargetCollection.png\&quot;&gt;  - Select the Wikitude SDK version you're using and click *Generate* to trigger the creation of the WTC file. You will be notified via e-Mai once the file is available for download.  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_TargetCollections.png\&quot;&gt;  "
});

documentTitles["targetmanagement.html#use-projects-wtc-file-in-your-architect-world"] = "Use project's WTC file in your ARchitect World";
index.add({
    url: "targetmanagement.html#use-projects-wtc-file-in-your-architect-world",
    title: "Use project's WTC file in your ARchitect World",
    body: "### Use project's WTC file in your ARchitect World   Look at one of the [client recognition examples](clientrecognition.html) or refer to the JavaScript API reference of [`AR.ClientTracker`](architectapi://reference/classes/ClientTracker.html) for instructions on how to use the created target collection for augmentations in your ARchitect Worlds.  "
});

documentTitles["targetmanagement.html#cloud-recognition"] = "Cloud Recognition";
index.add({
    url: "targetmanagement.html#cloud-recognition",
    title: "Cloud Recognition",
    body: "### Cloud Recognition  Any existing project may also be published to the Cloud to make it accessible for [`AR.CloudTracker`](architectapi://reference/classes/CloudTracker.html).   Click the *Cloud icon* in the toolbar for more details.  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_CloudIcon.png\&quot;&gt;  Cloud Recognition is available for free in your testing process but you must purchase a license for productive use. [Learn more](http://www.wikitude.com/external/doc/documentation/latest/cloudrecognition/gettingstartedcloudrecognition.html#quota-and-limits)  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmg_CloudPublishing.png\&quot;&gt;  Once a project is published it is accessible via Wiktiude SDK using 'Client Token' and 'Target Collection ID' (compare [`AR.CloudTracker`](architectapi://reference/classes/CloudTracker.html))   &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_CloudTracker.png\&quot;&gt;  Hints  - You may unpublish a project at any time but be aware that this action has immediate effect on your application(s) making use of the credentials.  - **Metadata** in the 'Edit Target' dialog is solely relevant for Cloud Recognition whereat **Physical Height** is only relevant for distanceToTarget feature.  - Leave **Physical Height** empty if you do not use the distanceToTarget feature of [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).  - The **Metadata** field is very useful. It allows you to attach JSON data to a target. That way you can define any kind of additional data and react on it dynamically in the SDK to e.g. let a button refer to a details page which is defined in the Metadata JSON.  &lt;img style=\&quot;width: 500px\&quot; src=\&quot;images/tmt_CloudTargetEdit.png\&quot;&gt;         "
});



documentTitles["targetguide.html#best-practice-for-target-images"] = "Best practice for target images";
index.add({
    url: "targetguide.html#best-practice-for-target-images",
    title: "Best practice for target images",
    body: "## Best practice for target images  This guide gives you an overview of how to create a target collection that you can use to detect and track images within your ARchitect World.  "
});

documentTitles["targetguide.html#summary"] = "Summary";
index.add({
    url: "targetguide.html#summary",
    title: "Summary",
    body: "### Summary  **Preferred images have:**  - between 500 to 1000 pixels in each dimension - Rich contrast - Evenly distributed textured areas - Many corner like structures  **Unsuitable images have:**  - Smaller dimensions than 500 pixels - Larger than 1000 pixels as they do not provide more accurate results - Large amounts of text - Many repetitive patterns - Large single-colored areas  - Color contrast only e.g. green to red edge), because all images are processed as grayscale images   "
});

documentTitles["targetguide.html#optimal-image-dimensions"] = "Optimal Image Dimensions";
index.add({
    url: "targetguide.html#optimal-image-dimensions",
    title: "Optimal Image Dimensions",
    body: "### Optimal Image Dimensions  - Optimal images are sized between 500 and 1000 pixels in each dimension - Small images do not contain enough graphical information to extract so called feature points. The uniqueness, amount and distribution of features points are the key indicators for good detection and tracking quality - Larger images do not improve the tracking quality ![Target image too small](images/guide_dimension_wrong.png) ![Optimal size of target image](images/guide_dimension_good.png)  "
});

documentTitles["targetguide.html#low-contrast-images"] = "Low contrast images";
index.add({
    url: "targetguide.html#low-contrast-images",
    title: "Low contrast images",
    body: "### Low contrast images  - Images with high local contrast and large amount of rich textured areas is best suited for reliable detection and tracking - Color contrast only (i.e. green to red edge) appears as high contrast to the human eye but is not discriminative to computer vision algorithms as they are operating on grayscale images ***Tip***: For low contrast images, try to increase the contrast of your target image with an image editing tool like Gimp or PhotoShop to improve detection and tracking quality  ![Target image with low contrast](images/low_contrast_wrong.png) ![Target image with good contrast](images/low_contrast_good.png)  "
});

documentTitles["targetguide.html#distribution-of-textured-areas"] = "Distribution of textured areas";
index.add({
    url: "targetguide.html#distribution-of-textured-areas",
    title: "Distribution of textured areas",
    body: "### Distribution of textured areas  - Images with evenly distributed textured areas are good candidates for reliable detection and tracking - This might be the hardest part to be in control of and often can’t be changed. ***Tip***: Try to crop the most prominent part of your image and use only this as target image.  ![Target image with not optimal distribution](images/texture_distribution_wrong.png) ![Even distribution of features](images/texture_distribution_good.png)  "
});

documentTitles["targetguide.html#images-with-whitespace"] = "Images with whitespace";
index.add({
    url: "targetguide.html#images-with-whitespace",
    title: "Images with whitespace",
    body: "### Images with whitespace  - Single-colored areas or smooth color transitions often found in backgrounds do not exhibit graphical information suitable for detection and tracking.  ***Tip***: Try to crop the most prominent part of your image and use only this as target image.  ![Too much whitespace](images/whitespace_wrong.png) ![Image reduced to the most relevant part](images/whitespace_good.png)  "
});

documentTitles["targetguide.html#vector-based-graphics"] = "Vector-based graphics";
index.add({
    url: "targetguide.html#vector-based-graphics",
    title: "Vector-based graphics",
    body: "### Vector-based graphics   - Logos and vector-based graphics usually consist of very few areas with high local contrast and textured structures and are therefore hard to detect and track.   ***Tip***: Try to add additional elements to the graphic like your logotype or any other specific elements, which can go along with your graphic.  ![Vector-based image](images/vector_wrong.png) ![Target image mixed with graphic elements](images/vector_good.png)  "
});

documentTitles["targetguide.html#images-with-a-lot-of-text"] = "Images with a lot of text";
index.add({
    url: "targetguide.html#images-with-a-lot-of-text",
    title: "Images with a lot of text",
    body: "### Images with a lot of text - Images consisting primarily of large areas of text are hard to detect and track.  ***Tip***: Try to have at least some graphical material and images next to your text for your target image.  ![Pure text](images/text_wrong.png) ![Text mixed with graphic elements](images/text_good.png)  "
});

documentTitles["targetguide.html#repetitive-patterns"] = "Repetitive patterns";
index.add({
    url: "targetguide.html#repetitive-patterns",
    title: "Repetitive patterns",
    body: "### Repetitive patterns  - Repetitive patterns exhibit the same graphical information information at each feature point and therefore cannot be localized reliably - Images with slightly irregular structures can convey a similar information to the target audience while providing enough unique feature points to be detected (second image)  ***Tip***: Try a different selection of your image including non pattern parts or use images with irregular patterns  ![Repetitive patterns that do not track](images/patterns_wrong.png) ![Pattern with irregular structures](images/patterns_good.png)       "
});



documentTitles["targetimages.html#target-images"] = "Target Images";
index.add({
    url: "targetimages.html#target-images",
    title: "Target Images",
    body: "## Target Images  "
});

documentTitles["targetimages.html#all-samples"] = "All samples";
index.add({
    url: "targetimages.html#all-samples",
    title: "All samples",
    body: "### All samples   &lt;a href='images/wikitude_sample_app_target_images.zip'&gt;Click here to download all target images&lt;/a&gt;  &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/magazine_page_one.jpeg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='clientrecognition.html'&gt;Client Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/magazine_page_two.jpeg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='clientrecognition.html'&gt;Client Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/Stone_Wall.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='clientrecognition.html'&gt;Client Extended Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/schloss_johannisberg.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='cloudrecognition.html'&gt;Cloud Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/brazil.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='cloudrecognition.html'&gt;Cloud Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/barone.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='cloudrecognition.html'&gt;Cloud Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/etiquette_ermitage.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='cloudrecognition.html'&gt;Cloud Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/gw_bf2011.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='cloudrecognition.html'&gt;Cloud Recognition&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/carAd.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='3dmodels.html'&gt;3D models&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/solar_system.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='solarsystemir.html'&gt;Solar System (IR)&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/ir_geo_poster.jpg\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='2dtrackingandgeo.html#combine-client-recognition-and-pois'&gt;Combine Client Recognition and POIs&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/barcode_wikitude.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group2\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='pluginsapi.html'&gt;Plugins API barcode reader&lt;/a&gt;\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/hello_wikitude_qr.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group2\&quot; data-jslghtbx-caption=\&quot;Sample: &lt;a href='pluginsapi.html'&gt;Plugins API QR reader&lt;/a&gt;\&quot;&gt;"
});



documentTitles["3dtracking.html#wikitude-3d-tracking"] = "Wikitude 3D Tracking";
index.add({
    url: "3dtracking.html#wikitude-3d-tracking",
    title: "Wikitude 3D Tracking",
    body: "# Wikitude 3D Tracking  "
});

documentTitles["3dtracking.html#about-wikitude-3d-tracking"] = "About Wikitude 3D Tracking";
index.add({
    url: "3dtracking.html#about-wikitude-3d-tracking",
    title: "About Wikitude 3D Tracking",
    body: "## About Wikitude 3D Tracking  ![](images/3dtracking_hero.jpg)  While the Wikitude SDK and its own integrated computer vision engine have been excelling over the past years to detect planar images, our goal was always to not stop at the 2nd dimension but extend recognition and tracking to the third dimension.  The new 3D computer vision engine included in the Wikitude SDK (Native API) can be used to recognize and track arbitrary three-dimensional objects and pieces. The 3D computer vision engine now captures and tracks the depth and distance of salient points in the live camera image. When saved as a tracking map, these points can be recognized and tracked at a later stage again.  We recommend to start to study the sample [`Client Recognition &gt; 3D Tracking`](clientrecognitionnative.html#3d-client-tracking-android) where we are describing how to use this feature in your augmented reality experience.  The sample describes the full flow of how to record a map, save and load a map and use the updated class `TrackerManager`. You can read more about how to [record 3D tracking maps in a separate guide](trackingmap3d.html) and understand which objects and scene work well using the Wikitude 3D Tracking engine from our [3D Tracking Guidelines and best practices](3dtracking-guidelines.html). For details on the actual classes checkout the reference.     "
});

documentTitles["3dtracking.html#license"] = "License";
index.add({
    url: "3dtracking.html#license",
    title: "License",
    body: "## License &lt;div class=\&quot;warning\&quot;&gt;Wikitude 3D Tracking is &lt;strong&gt;NOT&lt;/strong&gt; part of the free trial license you can generate on the &lt;a href=\&quot;http://www.wikitude.com/developer/licenses\&quot; target=\&quot;_top\&quot;&gt;license page&lt;/a&gt;. You need to request a separate trial license using &lt;a href=\&quot;https://www.wikitude.com/products/wikitude-sdk-features/wikitude-sdk-3d-tracking/\&quot; target=\&quot;_blank\&quot;&gt;this form&lt;/a&gt;. &lt;/div&gt;  For commercial use, Wikitude 3D tracking is part of the SDK PRO family (SDK PRO, SDK PRO+ and SDK PRO+ Unlimited).   "
});

documentTitles["3dtracking.html#limitations-of-the-wikitude-3d-tracking-beta"] = "Limitations of the Wikitude 3D Tracking Beta";
index.add({
    url: "3dtracking.html#limitations-of-the-wikitude-3d-tracking-beta",
    title: "Limitations of the Wikitude 3D Tracking Beta",
    body: "## Limitations of the Wikitude 3D Tracking Beta * The functionality is currently only available in the Native API for Android and iOS * Only small-size tracking maps (scenes) are supported in the SDK and will work well - see the chapter [3D Tracking Guidelines and best practices](3dtracking-guidelines.html) for more details on well suited objects * It is not possible to combine 2D and 3D tracking * A tracking map cannot be edited after it was recorded"
});



documentTitles["trackingmap3d.html#creating-3d-tracking-maps"] = "Creating 3D Tracking Maps";
index.add({
    url: "trackingmap3d.html#creating-3d-tracking-maps",
    title: "Creating 3D Tracking Maps",
    body: "## Creating 3D Tracking Maps  To be able to use 3D Tracking in your Wikitude powered application, you will need to create a so called Tracking Map. This Tracking Map is a simple file (.wtm file) which contains all the information needed by the Wikitude SDK to track the 3D objects of your choice. Similar to a .wtc file you might know from 2D tracking you later have the choice of packaging the Tracking Map file within your app or store it on a web server and let the Wikitude SDK download it.    "
});

documentTitles["trackingmap3d.html#using-the-wikitude-android-example-application-to-record-tracking-maps"] = "Using the Wikitude Android Example Application to record Tracking Maps";
index.add({
    url: "trackingmap3d.html#using-the-wikitude-android-example-application-to-record-tracking-maps",
    title: "Using the Wikitude Android Example Application to record Tracking Maps",
    body: "### Using the Wikitude Android Example Application to record Tracking Maps  To use the Wikitude example application to record a Tracking Map, first download the Wikitude Native SDK release package and install the example application using the provided apk in the folder \&quot;Examples/NativeSDKSampleApp/apk\&quot;.  1. Open the Wikitude SDK (Native API) Example Application  2. Click on \&quot;Tracking Map Recorder\&quot; icon ![](images/map_editor.png) at the top-right of the screen  3. Now position your device so that the objects you would like to track are visible on the screen. 4. When you are ready click on \&quot;Start Recording\&quot; to begin the recording. 5. After you captured everything you would like to track with this particular map, click on \&quot;Stop Recording\&quot; 6. As soon as the map was saved successfully you will be presented a share dialog with which you are able to transfer your map to any supported service (e.g. Google Drive, Mail, ....) 7. Alternatively you can also connect your Android device to your computer and look for the .wtm files in the folder `Android &gt; data &gt; com.wikitude.nativesdksampleapp &gt; files`  Note: You might need to restart your mobile capture device to actually see the files.  &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/android_maprecorder_1.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/android_maprecorder_start_record.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/android_maprecorder_stop_record.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/android_maprecorder_saving.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot;&gt; &lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/android_maprecorder_share.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot;&gt;&lt;img class=\&quot;jslghtbx-thmb\&quot; src=\&quot;images/android_file_transfer.png\&quot; data-jslghtbx data-jslghtbx-group=\&quot;group1\&quot;&gt;     "
});

documentTitles["trackingmap3d.html#quality-of-the-tracking-map"] = "Quality of the Tracking Map";
index.add({
    url: "trackingmap3d.html#quality-of-the-tracking-map",
    title: "Quality of the Tracking Map",
    body: "### Quality of the Tracking Map  The Map recorder and the 3D Tracking sample in the sample app both include a high-level quality indicator, when you record a map. This quality indicator gives you a first estimate how well the tracking performance will be. There are tree levels, which will be displayed  - Bad: There are too few points available to recognize and track the object - Average: There are few points available to recognize and track the object. This will result in increased shaking and varying recognition results. - Good: The algorithm has found enough points to recognize and track the object  Check out the guide [3D Tracking Guidelines and best practices](3dtracking-guidelines.html) how to come to a decent recognition and tracking result.   "
});

documentTitles["trackingmap3d.html#editing-a-recorded-tracking-map"] = "Editing a recorded Tracking Map";
index.add({
    url: "trackingmap3d.html#editing-a-recorded-tracking-map",
    title: "Editing a recorded Tracking Map",
    body: "### Editing a recorded Tracking Map  During the beta phase of 3D tracking it is **not possible** to edit the tracking map after it has been saved. "
});



documentTitles["3dtracking-guidelines.html#3d-tracking-guidelines-and-best-practices"] = "3D Tracking Guidelines and best practices";
index.add({
    url: "3dtracking-guidelines.html#3d-tracking-guidelines-and-best-practices",
    title: "3D Tracking Guidelines and best practices",
    body: "## 3D Tracking Guidelines and best practices  The Wikitude SDK 3D Tracking engine currently is optimized for small-sized scenes and objects. With small-sized we mean table-sized scenes or scenes/objects that stretch a few meters. In contrast to other services it has not been optimized to work with particularly tiny objects only measuring a few centimeters  Objects and scenes that 3D Tracking engine can recognize and track **well**: - composite scenes with different objects - highly textured objects - evenly lit scenes  Objects and scenes where the 3D Tracking engine will **not operate well**:  - Shiny objects with minimal textures (e.g. solid metal surfaces) - Tiny objects only measuring a few centimeters - Often changing illumination and lighting conditions - Scenes containing of few objects - White (icy) walls   ![](images/3d_tracking_desk_bad.jpg) ![](images/3d_tracking_desk_average.jpg) ![](images/3d_tracking_desk_good.jpg)   ![](images/3d_tracking_room_bad.jpg) ![](images/3d_tracking_room_average.jpg) ![](images/3d_tracking_room_good.jpg) "
});



documentTitles["gettingstartedcloudrecognition.html#wikitude-cloud-recognition"] = "Wikitude Cloud Recognition";
index.add({
    url: "gettingstartedcloudrecognition.html#wikitude-cloud-recognition",
    title: "Wikitude Cloud Recognition",
    body: "# Wikitude Cloud Recognition  &lt;p class='intro' markdown='1'&gt;The Wikitude Cloud Recognition service is a cloud-based service provided by Wikitude, which recognizes images sent from Android and iOS apps using the Wikitude SDK. The recognized images are then tracked in the live camera feed and can be used for augmented reality experiences.&lt;/p&gt;  This documentation focuses on the RESTful API called Manager API, which is used to interact on a backend level with the Cloud Recognition service.   "
});

documentTitles["gettingstartedcloudrecognition.html#general-definitions"] = "General Definitions";
index.add({
    url: "gettingstartedcloudrecognition.html#general-definitions",
    title: "General Definitions",
    body: "## General Definitions  - **Target**: An image and its associated extracted data that is used to recognize an image.  - **Target Collection**: A group of `targets` that are searched together. Think of it as a directory, which contains all your images you want to search. The Wikitude SDK can work with two different sorts of `TargetCollections` 	+ On-device Target Collection: a static `wtc` file containing the extracted data of your images. Can consist of up to 1,000 images. 	+ Cloud Target Collection: A target collection stored on the Wikitude server. See `Cloud Archive` below.  	+  - **Cloud Archive**: An archive stored on the server that is optimized for cloud-based recognition. It is generated from a `TargetCollection` and is used in combination with the Wikitude SDK [`AR.CloudTracker`](architectapi://reference/classes/CloudTracker.html).  **Manager API**: A RESTful web API allowing developers to interact with the Cloud Recognition server for managing `Targets`, `TargetCollections` and `Cloud Archives`. Only you as a developer uses this API. None of your users of your app will interact with this API.  **Client API**: The Client API is the interface between the Wikitude SDK and the Cloud Recognition Service. The API itself is encapsulated in the Wikitude SDK class [`AR.CloudTracker`](architectapi://reference/classes/CloudTracker.html) and not directly accessible. Calls on the client API are called `Scans`.   **Region**: Wikitude is providing several hosting locations for its Cloud Recognition services to cut down unwanted network latency. As a developer you need to choose on which `Region` you and your customers want to operate.   "
});

documentTitles["gettingstartedcloudrecognition.html#getting-started-with-the-cloud-recognition-service"] = "Getting Started with the Cloud Recognition Service";
index.add({
    url: "gettingstartedcloudrecognition.html#getting-started-with-the-cloud-recognition-service",
    title: "Getting Started with the Cloud Recognition Service",
    body: "## Getting Started with the Cloud Recognition Service  "
});

documentTitles["gettingstartedcloudrecognition.html#regional-availability-of-wikitude-cloud-recognition-service"] = "Regional availability of Wikitude Cloud Recognition Service";
index.add({
    url: "gettingstartedcloudrecognition.html#regional-availability-of-wikitude-cloud-recognition-service",
    title: "Regional availability of Wikitude Cloud Recognition Service",
    body: "### Regional availability of Wikitude Cloud Recognition Service  As as a developer using Wikitude Cloud Recognition Service you need to choose which server location you want to use for your projects. Wikitude operates several servers running Wikitude Cloud Recognition Service in different locations world-wide.  As the region servers are separated content which is stored on one region servers is only available on this particular server. **Content is not synced across regions**. You can choose from the following `Regions`  - `Americas` - `China` - `Europe`  The servers for each region have separate dedicated domain names and therefore different configurations.   &lt;a id=\&quot;targetmanagerregional\&quot;&gt;&lt;/a&gt;  | Region | Target Manager | Manager API| SDK Setting | | :------------------ |:---------------:| ------ | ---- | |Americas|[targetmanager.wikitude.com](https://targetmanager.wikitude.com)|[https://api-us.wikitude.com](https://api-us.wikitude.com)|`Americas`| |China|[targetmanager-cn.wikitude.com](https://targetmanager-cn.wikitude.com)|[https://api-cn.wikitude.com](https://api-cn.wikitude.com)|`China`| |Europe|[targetmanager.wikitude.com](https://targetmanager.wikitude.com)|[https://api.wikitude.com](https://api.wikitude.com) or [https://api-eu.wikitude.com](https://api-eu.wikitude.com)|`Europe`|  "
});

documentTitles["gettingstartedcloudrecognition.html#preparation"] = "Preparation";
index.add({
    url: "gettingstartedcloudrecognition.html#preparation",
    title: "Preparation",
    body: "### Preparation                        "
});

documentTitles["gettingstartedcloudrecognition.html#first-steps-and-general-usage"] = "First Steps and General Usage";
index.add({
    url: "gettingstartedcloudrecognition.html#first-steps-and-general-usage",
    title: "First Steps and General Usage",
    body: "### First Steps and General Usage   1. Get familiar with the Manager API calls in the [API Reference](cloudrecoapi://index.html).  2. Create a first Target Collection using the [`Create Target Collection`](cloudrecoapi://index.html#api-TargetCollection-CreateTargetCollection) endpoint and note down the ID of the Target Collection	 3. Create targets using the [`Create Target`](cloudrecoapi://index.html#api-Target-CreateTarget) endpoint for that particular Target Collection 4. Important: [`Generate a Cloud Archive`](index.html#api-TargetCollection-GenerateCloudArchive) for your Target Collection 4. Go to the Wikitude SDK and create an Android or iOS project 5. Use the Client API token to authenticate your Android or iOS project 6. Use your Target Collection ID to recognize images  For more information on the available endpoints and how to work with the Manager API see the [workflow section](cloudrecognitionworkflow.html).  Instead of creating a `TargetCollection`, adding one or more `Targets`, and generating a `Cloud Archive` by calling the REST API, the [Wikitude Targetmanager](#targetmanagerregional) can be used to perform these steps (1-4) in the browser alternatively.  In case you would like to immediately test the API calls we recommend the tool [Postman](https://www.getpostman.com/). It helps you to quickly construct the requests and analyze the responses.  "
});

documentTitles["gettingstartedcloudrecognition.html#authentication"] = "Authentication";
index.add({
    url: "gettingstartedcloudrecognition.html#authentication",
    title: "Authentication",
    body: "## Authentication  The Cloud Recognition Service knows two authentication tokens, that you need in order to work with the service  * **Manager API token** You need this token to authenticate yourself against the RESTful Manager API. The Manager API is used to create, add and delete targets and target collections. The token identifies your developer account. Calls to the Manager API do not count towards your quota limits.  * **Client API token** You need this token to authenticate calls from the Wikitude SDK to the Cloud Recognition services. It again authenticates calls as legitimate. The token is bound to your developer account. Calls from the Wikitude SDK to the service with a wrong or missing token can not access your target collections.   "
});

documentTitles["gettingstartedcloudrecognition.html#authentication-on-the-manager-api"] = "Authentication on the Manager API";
index.add({
    url: "gettingstartedcloudrecognition.html#authentication-on-the-manager-api",
    title: "Authentication on the Manager API",
    body: "### Authentication on the Manager API  The **Manager API token** must be added to each call towards the Wikitude Cloud Recognition Manager API. The token authenticates the user account that is using the API.   "
});

documentTitles["gettingstartedcloudrecognition.html#authentication-on-the-client-api"] = "Authentication on the Client API";
index.add({
    url: "gettingstartedcloudrecognition.html#authentication-on-the-client-api",
    title: "Authentication on the Client API",
    body: "### Authentication on the Client API The **Client API token** must be added to your app project using the Wikitude SDK. This token is needed additionally beside the SDK license key when working with the [`AR.CloudTracker`](architectapi://reference/classes/CloudTracker.html) class.  "
});

documentTitles["gettingstartedcloudrecognition.html#quota-and-limits"] = "Quota and Limits";
index.add({
    url: "gettingstartedcloudrecognition.html#quota-and-limits",
    title: "Quota and Limits",
    body: "## Quota and Limits  "
});

documentTitles["gettingstartedcloudrecognition.html#general-upload-limit"] = "General Upload Limit";
index.add({
    url: "gettingstartedcloudrecognition.html#general-upload-limit",
    title: "General Upload Limit",
    body: "### General Upload Limit The Wikitude Cloud Recognition **will not accept images bigger than 1024kB** (1 MB). Trying to upload images exceeding this file size will result in a HTTP status code `400` together with an error message `FILE_SIZE_LIMIT_EXCEED`.  "
});

documentTitles["gettingstartedcloudrecognition.html#limits-for-the-wikitude-cloud-recognition-service"] = "Limits for the Wikitude Cloud Recognition Service";
index.add({
    url: "gettingstartedcloudrecognition.html#limits-for-the-wikitude-cloud-recognition-service",
    title: "Limits for the Wikitude Cloud Recognition Service",
    body: "### Limits for the Wikitude Cloud Recognition Service  There are two main limitations for the Wikitude Cloud Recognition service that you need to be aware of:  * **Targets** Your token has a certain number of targets that you can upload and store on the cloud service under your developer account. The limit is always counted for your entire developer account and not for a single target collection. The service is not counting single uploads, but how many targets are currently stored in target collections under your account.   * **Scans** Scans are in effect calls from the Wikitude SDK via the Client API to the Cloud Recognition servers. All commercial license come with an allowance of 1,000,000 scans per month per developer account. **Note:** When using Continuous Search mode multiple calls are made to the server.  "
});

documentTitles["gettingstartedcloudrecognition.html#maximum-number-of-targets-in-a-target-collection"] = "Maximum Number of Targets in a Target Collection";
index.add({
    url: "gettingstartedcloudrecognition.html#maximum-number-of-targets-in-a-target-collection",
    title: "Maximum Number of Targets in a Target Collection",
    body: "### Maximum Number of Targets in a Target Collection A target collection can't exceed 50,000 targets.  "
});

documentTitles["gettingstartedcloudrecognition.html#free-trial-license-for-cloud-recognition"] = "Free Trial License for Cloud Recognition";
index.add({
    url: "gettingstartedcloudrecognition.html#free-trial-license-for-cloud-recognition",
    title: "Free Trial License for Cloud Recognition",
    body: "### Free Trial License for Cloud Recognition  Wikitude provides a trial token for each developer account to try out the Cloud Recognition for free. This trial token has set a quota limit that allows developers to try and test the functionality of the service. Limitations for trial accounts  * Targets: 50,000 * Scans: 1,000 per month  To get your trial token for the REST, please visit the [License page](http://www.wikitude.com/developer/licenses). The trial token is directly integrated into the Target Manager Frontend.  "
});

documentTitles["gettingstartedcloudrecognition.html#commercial-licenses"] = "Commercial Licenses";
index.add({
    url: "gettingstartedcloudrecognition.html#commercial-licenses",
    title: "Commercial Licenses",
    body: "### Commercial Licenses For production systems, we offer commercial licenses with various quota limits for [purchase](http://www.wikitude.com/products/wikitude-cloud-recognition/).  | Product | Targets | Scans| | :------------------ |:---------------:| ------ | | Cloud Recognition 1000       | 1,000      | 1,000,000      | | Cloud Recognition 10000       | 10,000      | 1,000,000      | | Cloud Recognition 25000       | 25,000      | 1,000,000      | | Cloud Recognition 50000       | 50,000      | 1,000,000      | | Cloud Recognition 100000 (*)      | 100,000      | 1,000,000      |  (*) Maximum number of targets per target collection can't exceed 50,000    "
});



documentTitles["cloudrecognitionworkflow.html#your-first-target-collections"] = "Your first Target Collections";
index.add({
    url: "cloudrecognitionworkflow.html#your-first-target-collections",
    title: "Your first Target Collections",
    body: "## Your first Target Collections Target Collections are central to working with Cloud Recognition service. They keep all your target images and are the base for the cloud archive.  Think of TargetCollection as a directory, where your images are stored. A TargetCollection forms a logical group, which is searched as a whole. Of course you can have several TargetCollections in your account, each consisting up to 50,000 images each.     "
});

documentTitles["cloudrecognitionworkflow.html#what-is-the-difference-between-cloud-archive-and-target-collection"] = "What is the difference between Cloud Archive and Target Collection";
index.add({
    url: "cloudrecognitionworkflow.html#what-is-the-difference-between-cloud-archive-and-target-collection",
    title: "What is the difference between Cloud Archive and Target Collection",
    body: "### What is the difference between Cloud Archive and Target Collection  &lt;div class=\&quot;warning\&quot;&gt;A Cloud Archive is an optimized version of your Target Collection for cloud-based recognition. Cloud Archives are in internal structure, that keeps all necessary data for performing image recognition on the server. &lt;/div&gt;  "
});

documentTitles["cloudrecognitionworkflow.html#structure-of-a-targetcollection"] = "Structure of a TargetCollection";
index.add({
    url: "cloudrecognitionworkflow.html#structure-of-a-targetcollection",
    title: "Structure of a TargetCollection",
    body: "### Structure of a TargetCollection  | Property | Type | Description| | :------------------ |:---------------| ------ | |**id**| (String)| An ID that uniquely identifies the TargetCollection| | **name** | (String) | The Name of the TargetCollection, as defined by the user| | **creDat** | (Number)| A timestamp when the TargetCollection was created (as returned by JavaScript's `Date.now()` function)| | **modDat** | (Number)| A timestamp when the TargetCollection was last modified (as returned by JavaScript's `Date.now()` function)|   "
});

documentTitles["cloudrecognitionworkflow.html#create-a-target-collection"] = "Create a Target Collection";
index.add({
    url: "cloudrecognitionworkflow.html#create-a-target-collection",
    title: "Create a Target Collection",
    body: "### Create a Target Collection  Creating a Target Collection is easy and can be done without any prerequisites in your account. In general it is your starting point and most likely your very first action.  Call the endpoint (using the domain of one of the [regional servers](gettingstartedcloudrecognition.html#targetmanagerregional))  	/cloudrecognition/targetCollection  with the mandatory `name` field as a `POST` request and you will create a new TargetCollection. The response will contain a TargetCollection object, where the ID is most important parameter. You can also add `metadata` to a TargetCollection in case you want to some additional descriptive information. The next step is to add images to your TargetCollection, so they can be recognized.  "
});

documentTitles["cloudrecognitionworkflow.html#add-target-images"] = "Add Target Images";
index.add({
    url: "cloudrecognitionworkflow.html#add-target-images",
    title: "Add Target Images",
    body: "## Add Target Images  A Target is an plain image that can be recognized by the Wikitude Cloud Recognition service. Adding or creating a target means to provide a URL to your image to the server, which then downloads the image, analyzes it  and adds it to the TargetCollection. To add an image call the endpoint  	/cloudrecognition/targetCollection/:tcId/target  with the `ID` of the TargetCollection, where you want to add the image. You need to add the a field `imageUrl` to your request. The image must be publicly accessible.  Pay attention to the optional fields `name` and `metadata`. `name` is a unique identifier for your target within the TargetCollection. It is up to you to set and use this. The same is true for the `metadata` object, which takes a full JSON object and can be filled with any value you like. The `metadata` object will be present in the recognition response.   &lt;div class=\&quot;tip\&quot;&gt;&lt;strong&gt;Important: &lt;/strong&gt;You are not done yet. As a next step you need to Generate the Cloud Archive of your TargetCollection.&lt;/div&gt;  "
});

documentTitles["cloudrecognitionworkflow.html#structure-of-a-target"] = "Structure of a Target";
index.add({
    url: "cloudrecognitionworkflow.html#structure-of-a-target",
    title: "Structure of a Target",
    body: "### Structure of a Target  | Property | Type | Description| | :------------------ |:---------------| ------ | |id |(String)| An ID that uniquely identifies the Target| |name |(String)| The Name of the Target, as defined by the user| |imageUrl |(String)| The URL pointing to the original, uncompressed and uncropped Target binary file| |thumbnailUrl| (String)| The URL pointing to a thumbnail representation of the Target| |rating |(Number)| The rating (from 0 to 3) of the Target| |fileSize |(Number)| The file size of the original Target binary image file, in bytes| |physicalHeight |(Number)| The physical (real world) height of the target, in millimeters| |creDat| (Number)| A timestamp when the Target was created (as returned by JavaScript's Date.now() function)| |modDat |(Number)| A timestamp when the Target was last modified (as returned by JavaScript's Date.now() function)| |metadata| (JSON)| Arbitrary JSON data that is stored together with the target.|   "
});

documentTitles["cloudrecognitionworkflow.html#generate-a-cloud-archive"] = "Generate a Cloud Archive";
index.add({
    url: "cloudrecognitionworkflow.html#generate-a-cloud-archive",
    title: "Generate a Cloud Archive",
    body: "## Generate a Cloud Archive  Once you are done with adding targets you need to tell the server that it should generate your TargetCollection into a Cloud Archive. Call  	/cloudrecognition/targetCollection/:tcId/generation 	 again with the `ID` of your TargetCollection and the process will be started. Since this call is asynchronous you will receive the response immediately with a path in the Location-property in the header of the response. By calling the url with the path, for example 	 	/cloudrecognition/targetCollection/:tcId/generation/wtc/:generationId 	 with a GET-method request, you will see the [status of the progress](cloudrecoapi://index.html#api-TargetCollection-GetGenerationInformation) of the cloud archive generation in the response body as a JSON object. When the generation is completed, the cloud archive is available for recognition. Note that the generation process can take a while when generating a large TargetCollection for the first time. Small additions to existing cloud archives are processed a lot faster.  &lt;div class=\&quot;warning\&quot;&gt; Everytime you changed a target (add/delete) you need to manually call Generate Cloud Archive for your target collection. Otherwise  &lt;ul&gt;&lt;li&gt;your newly added image will not be recognized &lt;/li&gt; &lt;li&gt;your deleted image will still be recognized&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;  Your Cloud Archive is now ready on the server and can be used in combination with the Wikitude SDK from your app. See the SDK sample called [Cloud Recognition](cloudrecognition.html) for more details.   "
});

documentTitles["cloudrecognitionworkflow.html#generate-a-wtc-file"] = "Generate a WTC file";
index.add({
    url: "cloudrecognitionworkflow.html#generate-a-wtc-file",
    title: "Generate a WTC file",
    body: "## Generate a WTC file You can create and download a wtc file of a specific Target Collection ([Generate WTC](cloudrecoapi://#api-TargetCollection-GenerateWTC)) with up to 1000 targets by calling  	/cloudrecognition/targetCollection/:tcId/generation/wtc 	 with method POST. You have to specify the SDK version the wtc file should be built for in the request body. Valid values for the version are \&quot;3.x\&quot;, \&quot;4.0\&quot;, \&quot;4.1\&quot;, and \&quot;5.0\&quot;. Optionally, an email address can be added. The email is used for a notification once the generation of the wtc file has finished. Example for the request body:  	{ 		\&quot;sdkVersion\&quot;: \&quot;5.0\&quot;, 		\&quot;iwantmywtcfile@wikitude-user.com\&quot; 	} 	 Similar to the cloud archive generation this call is asynchronous, so the response header (Location) contains a path useful for requesting the [status of the wtc creation](cloudrecoapi://index.html#api-TargetCollection-GetWTCGenerationInformation). Once the status is `COMPLETED` the link to the actual wtc file can be requested from the [TargetCollection](cloudrecoapi://#api-TargetCollection-GetTargetCollection). The received `TargetCollection` object (in the body of the response) contains an additional property called `wtc`, which is an array of wtc objects. Those objects consists of the following properties:  - the `url` to the wtc file,  - the number of targets (`nrOfTargets`), - the `version`, - the creation date (`creDat`)  "
});

documentTitles["cloudrecognitionworkflow.html#additional-calls"] = "Additional calls";
index.add({
    url: "cloudrecognitionworkflow.html#additional-calls",
    title: "Additional calls",
    body: "## Additional calls  Beside the above described steps the Manager API also offers to [Delete TargetCollections](cloudrecoapi://index.html#api-TargetCollection-DeleteTargetCollection) and [Delete Targets](cloudrecoapi://index.html#api-Target-DeleteTarget).   Using `GET` request you can query details about a [single TargetCollection](cloudrecoapi://#api-TargetCollection-GetTargetCollection), [all Target Collections](cloudrecoapi://#api-TargetCollection-GetAllTargetCollections) in your account, a [single Target](cloudrecoapi://#api-Target-GetTarget) and [all Targets within a TargetCollection](cloudrecoapi://#api-Target-GetAllTargets).  The physical height and the metadata of an existing target can be [updated](cloudrecoapi://#api-Target-UpdateTarget)."
});



documentTitles["migration-androidnative.html#migrate"] = "Migrate";
index.add({
    url: "migration-androidnative.html#migrate",
    title: "Migrate",
    body: "# Migrate  Migration notes for the Wikitude SDK Native API (Android)  "
});

documentTitles["migration-androidnative.html#migrate-from-10-to-11"] = "Migrate from 1.0 to 1.1";
index.add({
    url: "migration-androidnative.html#migrate-from-10-to-11",
    title: "Migrate from 1.0 to 1.1",
    body: "## Migrate from 1.0 to 1.1 * `TrackerManager` methods for creating a `ClientTracker` for 2D have changed from `createClientTracker` to `create2dClientTracker` * `TrackerManager` methods for creating a `CloudTracker` for 2D have changed from `createCloudTracker` to `create2dCloudTracker` "
});



documentTitles["referenceandroidnative.html#reference"] = "Reference";
index.add({
    url: "referenceandroidnative.html#reference",
    title: "Reference",
    body: "# Reference  "
});

documentTitles["referenceandroidnative.html#android-native-api-javadocs"] = "Android Native API JavaDocs";
index.add({
    url: "referenceandroidnative.html#android-native-api-javadocs",
    title: "Android Native API JavaDocs",
    body: "## Android Native API JavaDocs  Go to [Android Native API JavaDoc Reference](../Reference/Android%20Native%20SDK%20API/index.html) for a complete reference of all Android Wikitude Native API objects and functions.   "
});

documentTitles["referenceandroidnative.html#cloud-recognition-manager-api"] = "Cloud Recognition Manager API";
index.add({
    url: "referenceandroidnative.html#cloud-recognition-manager-api",
    title: "Cloud Recognition Manager API",
    body: "## Cloud Recognition Manager API  Go to [REST API Reference](cloudrecoapi://index.html) for a complete reference of all REST API calls for the Manager API.   "
});



documentTitles["changelog.html#wikitude-sdk-android-native-api-release-notes"] = "Wikitude SDK Android Native API Release Notes";
index.add({
    url: "changelog.html#wikitude-sdk-android-native-api-release-notes",
    title: "Wikitude SDK Android Native API Release Notes",
    body: "# Wikitude SDK Android Native API Release Notes "
});

documentTitles["changelog.html#wikitude-sdk-5"] = "Wikitude SDK 5";
index.add({
    url: "changelog.html#wikitude-sdk-5",
    title: "Wikitude SDK 5",
    body: "## Wikitude SDK 5  "
});

documentTitles["changelog.html#wikitude-sdk-native-api-120"] = "Wikitude SDK Native API 1.2.0";
index.add({
    url: "changelog.html#wikitude-sdk-native-api-120",
    title: "Wikitude SDK Native API 1.2.0",
    body: "### Wikitude SDK Native API 1.2.0 Release Date: 15.10.2015  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - Support for Android switched camera on Nexus 5X  - Support multiple regional co-located cloud recognition services  - Improvements in visualization of 3D Tracking Beta    "
});

documentTitles["changelog.html#wikitude-sdk-native-api-110"] = "Wikitude SDK Native API 1.1.0";
index.add({
    url: "changelog.html#wikitude-sdk-native-api-110",
    title: "Wikitude SDK Native API 1.1.0",
    body: "### Wikitude SDK Native API 1.1.0 Release Date: 15.10.2015  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - 3D Tracking Beta for small-sized objects  - Map recorder in sample App  - Updated Client Tracking sample with new 3D Tracking sample  "
});

documentTitles["changelog.html#wikitude-sdk-native-api-100"] = "Wikitude SDK Native API 1.0.0";
index.add({
    url: "changelog.html#wikitude-sdk-native-api-100",
    title: "Wikitude SDK Native API 1.0.0",
    body: "### Wikitude SDK Native API 1.0.0 Release Date: 28.08.2015   "
});

documentTitles["changelog.html#wikitude-sdk-native-api-100-beta"] = "Wikitude SDK Native API 1.0.0 beta";
index.add({
    url: "changelog.html#wikitude-sdk-native-api-100-beta",
    title: "Wikitude SDK Native API 1.0.0 beta",
    body: "### Wikitude SDK Native API 1.0.0 beta Release Date: 30.07.2015  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New - Initial Public Release of Android Native API "
});

