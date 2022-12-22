<h1 style="text-align: center;">Scam Finder 🔍</h1>
<p align="center">
    <img src="https://img.shields.io/github/stars/arthurmatthew/scam-finder?color=violet" alt="Stars">
    <img src="https://img.shields.io/github/watchers/arthurmatthew/scam-finder?color=violet" alt="Stars">
</p>

⚠ This is an incomplete project.

**Scam Finder** is an open source tool which helps find **scam popup** websites. It loads through domains known for hosting malicious websites. The project is written in TypeScript using Puppeteer.

<ul style="text-align: center;">
    <a href="#usage">Usage</a><br/>
    <a href="#contribute">Contribute</a><br/>
    <a href="#support">Support</a><br/>
    <a href="#faq">FAQ</a><br/>
    <a href="#efficiency">Efficiency</a><br/>
</ul>

# Usage

Want to develop & run the source code on your machine?

**1. Clone this repository**

In your terminal, clone the repository onto your machine. <br/>
`git clone <repository URL>`

**2. CD into the repository**

Change your directory to the newly cloned repository. <br/>
`cd <folder name>`

**3. Install dependencies**

Install the dependencies needed for this project. <br/>
`npm install`

**4. Start the project**

Start the program. <br/>
`npm start`

# Contribute

Want to contribute to this project? Help develop, look for issues- anything! All contributions are welcome!

# Support

If you'd like to support this project, you can star the GitHub repo.

# FAQ

Q: **How do I make the program run faster?**<br/>

A: You can lower the `maxTimeout` setting. This lowers how long the browser will wait for things to happen. **Sometimes, if the maximum timeout is too low the browser may move on to early, possibly skipping past a good website.**

Q: **Why are there so many errors?**<br/>

A: The 'errors' are really just unsuccessful links. For example, a link may not be active causing it to instantly respond with an error, which causes the browser to log this in the console & move on. **If you want higher success rate, read the section below.**

# Efficiency

Scam Finder simply searches through malicious links looking for scam popups. Here are some tips to increase efficiency.

- **Change the user agent.**
  A browser's user agent helps websites identify how their website is being visited using information about what browser you are using, etc. Sometimes, malicious sites will use this to their advantage, targeting only a certain group of people or avoiding user agents that appear to be from bots. By default, the user agent is set to Google Chrome v72. However, it is recommended to play around with it and see what works best. You can find user agents to use at [this website](https://developers.whatismybrowser.com/useragents/explore/) and enter them in the `CONFIG` object in `index.ts`.
- **Change the viewport size.** Changing the viewport size can make websites think you're on different kinds of devices. Pairing this with a corresponding user agent can make websites believe undoubtedly that you are a real person on a real device. This can be changed in the `CONFIG` object in `index.ts`
- **Don't use Scam Finder too much & too fast.** Many malicious websites will limit how many requests a user can make to their website. This is because they don't spend enough money on their servers or they want to avoid too much attention to their website. This can be avoided by using VPNs, or not using Scam Finder a lot without waiting.
- **Change which modifiers are used.** Modifiers are functions that modify base URLs like `google.com` and make variations of them that are possibly malicious. An example of a modifier is the `missingLetters` function, which takes a base URL and returns a list of variations like `gogle.com` and `googe.com`. This can be useful because scammers use this tactic to direct people to a malicious site when they misspell a URL. However, a lot of the time these URLs don't work. **If you want to be as efficient as possible, you can disable modifiers in `index.ts` at the `CONFIG` object. Disabling all of them will make the program use a premade list of common scam URLs.** If you're feeling curious, you can even make your own modifier!
