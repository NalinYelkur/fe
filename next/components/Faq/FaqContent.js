import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center pb-5">
            <div className="col-lg-7 col-md-12">
              <div className="faq-accordion">
                {/* <h2>
                  Raise Engagement, Retention, and Conversion rate with -
                  <span>PlugtoChat</span>
                </h2>
                <h3>Perfectly build, as you want it.</h3> */}

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to show the user's avatar or profile
                        picture next to their chat messages?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can do this if you are on PlugtoChat’s Standard plan
                        or above. Go to your dashboard and click on role
                        (formerly called configuration) heading.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Why do some Javascript SDK calls return fields with
                        [suppressed]?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We respect users’ privacy and disallow you to access
                        sensitive data through the Javascript SDK. Instead, you
                        can make use of our REST API to access this data.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I copy or export my data?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, users easily export data using REST API or by
                        contacting us for a copy.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What happens when someone (inadvertently or on purpose)
                        strips the content from the notification email (leaving
                        it blank) and then replies anyway?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Email notifications are sent from a unique email address
                        that contains an authentication code. Anything the user
                        emails to that address will be included in that
                        conversation. We have also implemented some heuristics
                        that help avoid posting a message that contains a
                        signature or quoted-reply text before the message is
                        posted.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Would it be possible for our users to create their own
                        (group) chats?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our chat engine will allow you to build your own group
                        chats and then use them. Using the REST API or the JS
                        SDK, you can create chat rooms programmatically. In
                        other words, you can add a button to create a group chat
                        with particular people, use our API to create the chat,
                        and then drop the current user into the chat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="faq-image">
                <img src="/images/faq/faq2.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="row align-items-center pb-5">
            <div className="col-lg-5 col-md-12">
              <div className="faq-image">
                <img src="/images/faq/faq3.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does PlugtoChat determine whether to send an
                        sms/email notification to a user?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The PlugtoChat system includes a heuristic that ensures
                        that people who miss messages are notified quickly,
                        without feeling like they are being spammed. An email or
                        SMS notification will not be sent when someone is
                        actively looking at a chat. If a user has not looked at
                        a specific chat for a certain period of time, PlugtoChat
                        sends a notification. In this notification, all messages
                        will be grouped into a single email to keep your
                        user&#39;s mailbox from exploding.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I integrate PlugtoChat with Facebook Messenger,
                        WhatsApp, Telegram, etc.?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Currently, PlugtoChat does not offer third-party
                        integrations. With a little programming, it&#39;s
                        possible to create a custom integration. Using
                        PlugtoChat webhooks, you can be notified when a user
                        writes a message, which can be forwarded to a
                        third-party service via their API. Use the PlugtoChat
                        REST API (send message docs) to inject messages from
                        third-party services into the PlugtoChat chat. The
                        entire conversation will be mirrored on both PlugtoChat
                        and the third-party service.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can visitors start a chat without registering?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        PlugtoChat needs a user ID to identify a user. By
                        creating anonymous user accounts, users can be
                        identified with PlugtoChat by using their user id. With
                        our HTML panel feature, you can ask the user for
                        information during the chat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I change the color of the close button on the popup
                        widget?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, You should disable the pop-up launcher entirely and
                        create your own, however, you like. When calling create
                        a popup, set the launcher property to "never".
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Which file formats/types can we send with PlugtoChat?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        PlugtoChat Standard plan customers can transfer files
                        between users. PlugtoChat currently supports the
                        following file types: mp4 | mpeg |qt | bmp | svg | psd |
                        pdf | ai | 7z | zip | arj | bz2 | gz | lha | sit | tar |
                        docx | xlsx | pptx | txt | md| log | avi | mkv | mov |
                        webm | aiff |aif | midi | mid | gif | jpeg | jpg | png |
                        tif | tiff|
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="row align-items-center pb-5">
            <div className="col-lg-7 col-md-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to resize PlugtoChat to fit the area
                        given?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can set the container's dimensions in your CSS to
                        change PlugtoChat's height. To modify the width, you
                        need to edit the width of two classes in themes:
                        inbox-feed-panel and inbox-chat-panel.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to add a custom/additional feature to
                        PlugtoChat?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        According to the issue, the urgency of the request, and
                        how many users would benefit from the feature, we
                        evaluate each custom feature request on a case-by-case
                        basis.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the options for showing only conversations with
                        unread messages or filtering the inbox?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        PlugtoChat lets you filter conversations in the Inbox UI
                        based on multiple properties. You can, for example,
                        filter the conversation list by only showing
                        conversations that are unread and users can write or
                        filter by a custom parameter.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to change the title and subtitle?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can choose to hide either or both the title and
                        subtitle of the chat window. This can be done when you
                        specify UI options for the Chat window.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to upgrade or downgrade my subscription?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        By contacting us through our chat or sending an email,
                        you can upgrade or downgrade your subscription.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is it possible to remove or replace the chat headers
                        provided by PlugtoChat?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can remove or customize the chat headers that
                        PlugtoChat uses by default. Check out the documentation
                        associated with this feature or view the blog post for a
                        more in-depth tutorial, complete with code samples.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I handle user authentication?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        PlugtoChat embeds inside your app or website, so all
                        users who are logged into your app must be "logged in"
                        to talk. Follow our getting started guide to get
                        started, ensure that Identity Verification is enabled so
                        that PlugtoChat is no longer available when a user logs
                        out.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        As an administrator, can I see a user's chat history?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, in the PlugtoChat dashboard, you can monitor users
                        and conversations and pull the data via the PlugtoChat
                        dashboard or via our webhooks.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="faq-image">
                <img src="/images/faq/faq4.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
