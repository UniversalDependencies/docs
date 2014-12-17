---
layout: feature
title: 'Foreign'
shortdef: 'is this a foreign word?'
---

Boolean feature. Is this a foreign word? Not a loan word and not a
foreign name but a genuinely foreign word appearing inside native
text, e.g. inside direct speech, titles of books etc.

Note that Czech data (especially those from the PDT) often indicate the original part of speech
of foreign words. Thus this feature may occur with any POS tag. If the original part of speech is
not known, the feature will accompany the [cs-pos/X]() tag.

### Foreign: it is foreign

#### Examples

* _… nese jméno <b>VLIW</b> (<b>Very Long Instruction Word</b> &ndash; velmi dlouhé instrukční slovo)_

### Fscript: it is foreign and written in a foreign script

#### Examples

* _V&nbsp;nepálštině se hora jmenuje <b>सगरमाथा</b>.&nbsp;_ “In Nepali, the mountain is called <b>सगरमाथा</b>.”

### Tscript: it is foreign and transcribed from a foreign script

#### Examples

* _Výše uvedené nepálské slovo lze přepsat jako <b>Sagaramāthā</b>.&nbsp;_ “The above Nepali word can be transcribed <b>Sagaramāthā</b>.”

## Diffs

### Prague Dependency Treebank

PDT does not contain words in foreign scripts (what it does contain are foreign letters based on
the Latin script), and transcriptions from foreign scripts are not explicitly marked, hence the
values `Fscript` and `Tscript` do not appear in the converted PDT data.

Articles in foreign names _(the, die, le)&nbsp;_ are tagged [cs-pos/ADJ](), not [cs-pos/DET]().
