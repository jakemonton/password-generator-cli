type PasswordOptions = {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  hasNumbers?: boolean;
  hasSymbols?: boolean;
  ambiguousSymbols?: boolean;
  save?: string;
}