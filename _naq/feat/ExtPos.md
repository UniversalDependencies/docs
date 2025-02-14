---
layout: feature
title: 'ExtPos'
shortdef: 'external part of speech'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
</tr>
</table>

This feature indicates, for the head of a fixed expression, the effective UPOS of the full expression when it differs from the UPOS of the word itself. he main motivation for **ExtPos** is that the multiword expression may behave like a part of speech different from the UPOS of the head node; however, **ExtPos** is sometimes used even if it is identical to the UPOS of the head node.

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _ǁîs ǃnâ<b>s tsîna</b> ta ge ǀgôaba ūhâ._ "I have a child **also** with her." (_s_ = PART)

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _gaob <b>tamas ka i o</b> gaos_ "king **or** queen" (_tama_ = PART)


