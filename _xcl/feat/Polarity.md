---
layout: feature
title: 'Polarity'
shortdef: 'whether the word can be or is negated'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Pos">Pos</a></td>
</tr>
</table>

In Classical Armenian, negation is a lexical feature of negative [particles](xcl-pos/PART) and negated copula չիք/_čʻikʻ_ “there is no”. Unlike <a href="https://universaldependencies.org/hy/feat/Polarity.html">Modern Eastern Armenian</a>, չ/_čʻ_, an allomorph of the negative particle ոչ/_očʻ_ “not” is not considered as part of the verb form. It is consistently segmented as a separate token taking the negation feature, while the negated verbs, adjectives, adverbs, pronouns as such are not specified for polarity. The value `Polarity=Pos` is not used for words without a dependent negative particle. Neither it is used for the non-negated copula. Derivational morphemes of negation (such as ան-/_an-_ “non-, un-” in անշէջ/_anšēǰ_ “inextinguishable”) are not tagged by the `Polarity` feature.

### <a name="Neg">`Neg`</a>: negative

The tag marks negative particles ոչ/_očʻ_ (with its allomorph չ/_čʻ_), մի/_mi_ “not”, and a negated copula չիք/_čʻikʻ_ “there is no”.

#### Examples

* negative particles: ոչ/_očʻ_, մի/_mi_ “not”
* negated copula: չիք/_čʻikʻ_ “there is no”

### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>).
