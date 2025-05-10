---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#ADP">ADP</a></td>
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
  <!--td><a href="#VERB">VERB</a></td-->
</tr>
</table>

This feature differs significantly from all other features: It describes neither the lexical category,
nor the inflectional paradigm slot of the token it appears on. Rather than to the individual token,
it pertains to a multiword expression and indicates the part of speech that the expression would get
if it were analyzed as a single word. `ExtPos` is annotated at the head node of the multiword
expression. The possible values are taken from the defined [UPOS tags](/u/pos/index.html) and no other
values are allowed (not even at the language-specific level). The main motivation for `ExtPos` is that
the multiword expression may behave like a part of speech different from the UPOS of the head node;
however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node.

In Classical Armenian, it is typical for heads of a [`fixed`](https://universaldependencies.org/en/dep/fixed.html) relation, and takes the values `ADP`, `ADV`, `SCONJ`.

### <a name="ADP">`ADP`</a>: adposition-like expression

#### Examples

* ի ձեռն / _i jeṙn_ “by means”, lit. “to hand”; the first node is [ADP](xcl-pos/ADP). 

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* ի միասին / _i miasin_ “together”; _i_ = [ADP]()

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* որպէս զի / _orpēs zi_ “so that”; _orpēs_ = [ADV]()
<!-- Interlanguage links updated So 10. května 2025, 18:14:06 CEST -->
