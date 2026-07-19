export const useValidate = () => {
  const { t } = useI18n();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function validateEmail(email: string): validationMsg {
    if (emailRegex.test(email)) {
      return { isValidate: true };
    } else {
      return { isValidate: false, issueMsg: t("validation.email") };
    }
  }

  function validateName(name: string): validationMsg {
    if (name.length > 1 && name.length < 255) {
      return { isValidate: true };
    } else {
      return { isValidate: false, issueMsg: t("validation.name") };
    }
  }

  function validateMessage(msg: string): validationMsg {
    if (msg.length > 1) {
      return { isValidate: true };
    } else {
      return { isValidate: false, issueMsg: t("validation.message") };
    }
  }

  function validateSubject(subject: string): validationMsg {
    if (subject.length > 1) {
      return { isValidate: true };
    } else {
      return { isValidate: false, issueMsg: t("validation.subject") };
    }
  }

  return { validateEmail, validateName, validateMessage, validateSubject };
};
