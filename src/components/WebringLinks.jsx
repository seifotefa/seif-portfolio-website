const WEBRING_URL = "https://mac-csse-webring.vercel.app/";
const MY_SITE = "seifotefa.com";
const WEBRING_LOGO = `${WEBRING_URL}assets/Uni_mcmaster_logo.svg.png`;

/**
 * McMaster CS & SE Webring links (embed: ← logo →).
 * @param {{ variant: 'inline' | 'footer' }} props - inline: logo next to resume; footer: arrow · logo · arrow in bar
 */
export const WebringLinks = ({ variant = "footer" }) => {
  const linkClass = "text-inherit no-underline hover:underline";
  if (variant === "inline") {
    const arrowClass = "text-gray-600 hover:text-black transition-colors text-xl md:text-2xl lg:text-3xl leading-none";
    return (
      <span className="inline-flex items-center gap-2 text-gray-600">
        <a
          href={`${WEBRING_URL}#${MY_SITE}?nav=prev`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} ${arrowClass}`}
          title="Previous site"
        >
          ←
        </a>
        <a
          href={WEBRING_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="McMaster CS & SE Webring"
          style={{ lineHeight: 0 }}
          className={`${linkClass} shrink-0`}
        >
          <img
            src={WEBRING_LOGO}
            alt="McMaster CS & SE Webring"
            className="h-7 w-auto md:h-9 lg:h-10 block object-contain grayscale"
          />
        </a>
        <a
          href={`${WEBRING_URL}#${MY_SITE}?nav=next`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} ${arrowClass}`}
          title="Next site"
        >
          →
        </a>
      </span>
    );
  }
  return (
    <p
      className="text-[0.85rem] md:text-[0.95rem] text-gray-600 flex items-center justify-center gap-2 flex-wrap"
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem" }}
    >
      <a
        href={`${WEBRING_URL}#${MY_SITE}?nav=prev`}
        className={linkClass}
        title="Previous site"
      >
        ←
      </a>
      <a
        href={WEBRING_URL}
        className={`${linkClass} shrink-0`}
        title="McMaster CS & SE Webring"
        style={{ lineHeight: 0 }}
      >
        <img
          src={WEBRING_LOGO}
          alt="McMaster CS & SE Webring"
          className="h-6 w-auto min-w-0 block object-contain grayscale"
        />
      </a>
      <a
        href={`${WEBRING_URL}#${MY_SITE}?nav=next`}
        className={linkClass}
        title="Next site"
      >
        →
      </a>
    </p>
  );
};
