---
layout: feature
title: 'Hyph'
shortdef: 'hyphenated compound or part of it'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature. Is this the first part of a hyphenated compound?

Compound adjectives with hyphens, such as _česko-slovenský&nbsp;_ “Czech-Slovak” get split during
tokenization. The last part, _slovenský,&nbsp;_ is an independent adjective with full inflection
paradigm. However, the first part, _česko,&nbsp;_ is a form that does not occur elsewhere than in
compounds (the independent form would be _český_).

### <a name="Yes">`Yes`</a>: it is part of hyphenated compound

#### Examples

* _<b>česko</b>-slovenský&nbsp;_ “Czecho-Slovak”
<!-- Interlanguage links updated Út zář 29 20:31:35 CEST 2020 -->
