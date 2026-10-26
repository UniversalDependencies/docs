---
layout: base
title:  'Tamil UD'
udver: '2'
---

# UD for Tamil <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/LK.svg" /></span>

## Preprocessing

Before UD annotation, all texts should be normalised and checked for ambiguous characters. The aim is not to correct the language, but to ensure consistent text representation.

### Unicode Normalisation

* Apply Unicode normalisation before tokenisation and annotation.
* Tamil vowel modifiers may be encoded inconsistently, especially the **e-series**, **o-series**, and **au** forms.
* Use one consistent Unicode form throughout the corpus, preferably **NFC**.

| Vowel modifier/issue | Example | Normalised form | Possible non-normalised form |
|---|---|---|---|
| ொ / _o_ | கொ | க + ொ | க + ெ + ா |
| ோ / _ō_ | கோ | க + ோ | க + ே + ா |
| ௌ / _au_ | கௌ | க + ௌ | க + ெ + ௗ |
| Independent vowel _au_ | ஔ | ஔ | ஒள |

### Ambiguous Characters

* Replace visually similar or wrongly encoded characters with the intended Tamil character.
* This is especially important in OCR text and old digitally converted texts.
* All replacements should be documented.

Note: Ambiguous character replacement should be done carefully. In some contexts, writers may intentionally use Tamil numerals in the text. For example, Tamil numerals may be used in Tamil calendars, traditional documents, or very old texts where Tamil number symbols are expected. In such cases, these characters should not be automatically replaced with visually similar Tamil letters. Annotators should first check the context and replace characters only when it is clear that they are wrongly encoded or unintentionally used.

| Ambiguous character/Tamil numeral | Correct character | Example correction |
|---|---|---|
| ௨ | உ | ௨லகம் → உலகம் |
| ௭ | எ | ௭ன்று → என்று |
| ௮ | அ | ௮வன் → அவன் |
| ௧ | க | ௧லம் → கலம் |

### General Rules

* Do not change the linguistic content.
* Do not modernise spelling unless the project requires it.

---
