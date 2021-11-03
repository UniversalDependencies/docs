---
layout: feature
title: 'Foreign'
shortdef: 'is this a foreign word?'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature. Is this a foreign word? Not a loan word
but a genuinely foreign word appearing inside native
text, e.g. inside direct speech, titles of books etc.

Note that Czech data (especially those from the PDT) often indicate the original part of speech
of foreign words. Thus this feature may occur with any POS tag. If the original part of speech is
not known, the feature will accompany the [cs-pos/X]() tag.

### <a name="Yes">`Yes`</a>: it is foreign

#### Examples

* _… nese jméno <b>VLIW</b> (<b>Very Long Instruction Word</b> &ndash; velmi dlouhé instrukční slovo)_

## Diffs

### Prague Dependency Treebank

For proper nouns the borderline between foreign words and loan words is somewhat fuzzy,
so e.g. the English personal name _George&nbsp;_ is marked as foreign even though it
would not normally be translated (except for names of rulers and saints, which would become _Jiří_).

Articles in foreign names _(the, die, le)&nbsp;_ are tagged [cs-pos/ADJ](), not [cs-pos/DET]().
<!-- Interlanguage links updated St lis 3 20:58:21 CET 2021 -->
