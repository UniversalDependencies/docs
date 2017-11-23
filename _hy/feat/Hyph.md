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

Compound adjectives with hyphens, such as _անգլո-ամերիկյան&nbsp;_ “Anglo-American” get split during
tokenization. The last part, _ամերիկյան,&nbsp;_ is an independent adjective. However, the first part, _անգլո,&nbsp;_ is a form that does not occur elsewhere than in
compounds (the independent form would be _անգլիական_).

### <a name="Yes">`Yes`</a>: it is part of hyphenated compound

#### Examples

* _<b>անգլո</b>-ամերիկյան&nbsp;_ “Anglo-American”
* _<b>իսրայելա</b>-պաղեստինյան&nbsp;_ “Israeli–Palestinian”
* _<b>կրոնա</b>-մշակութային&nbsp;_ “religious-cultural”
