---
layout: feature
title: 'ConjType'
shortdef: 'conjunction type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Oper">Oper</a></td>
</tr>
</table>

This feature further subclassifies the parts of speech [cs-pos/CCONJ]() and [cs-pos/SCONJ]();
in Czech, it is used only with `CCONJ`. The main distinction between coordinating and
subordinating conjunctions is done already at the part-of-speech level.

### `Oper`: mathematical operator

Note that operators can be expressed either using [symbols](cs-pos/SYM) or using words.
The words are considered special kind of coordinating conjunctions and they are marked using
`ConjType=Oper`.

#### Examples

* _<b>x</b>_ “×”, _<b>krát</b>_ “times”, _<b>plus</b>_ “plus”, _<b>minus</b>_ “minus”, _<b>kráte</b>_ “times”
<!-- Interlanguage links updated Út zář 29 20:23:06 CEST 2020 -->
