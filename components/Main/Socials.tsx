import Icon from "../Common/Icon";

export default function Socials() {
  return (
    <div className="hidden absolute left-1/2 bottom-10 ml-4 xl:flex flex-col gap-4">
      <Icon
        title="Facebook"
        href="https://www.facebook.com/vasilena.yoneva"
        icon="Facebook"
      />
      <Icon
        title="Instagram"
        href="https://instagram.com/____vasilena____"
        icon="Instagram"
      />
      <Icon
        title="Linkedin"
        href="https://www.linkedin.com/in/vasilena-yoneva/"
        icon="LinkedIn"
      />
      <Icon title="Github" href="https://github.com/Vasillena" icon="GitHub" />
      <Icon
        title="Behance"
        href="https://www.behance.net/vasilenayoneva"
        icon="Behance"
      />
    </div>
  );
}
