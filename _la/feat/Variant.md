---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Greek">Greek</a></td>
</tr>
</table>

`Variant` is used to distinguish word forms that differ only from a formal point of view, but that otherwise share the same lemma and morpholexical features. In Latin this is seen in the possible adoption of Greek [case](la-feat/Case) endings for [nouns](la-pos/NOUN) and [adjectives](la-pos/ADJ).


### <a name="Greek">`Greek`</a>: Greek morphology

Due their descent from a common ancestor (Proto-Indo-European), Latin and (Ancient) Greek share many similarities, especially with regard to their nominal [inflectional paradigms](la-feat/InflClass). This was evident also to native speakers at the time, so that it has always been straightforward to adapt words of one language to the inflectional schemes of the other. 

In Latin, we observe that, for words of Greek origin, sometimes such affinities have given rise to mixed Greek-Latin paradigms, or to the sporadic use of morphologically Greek forms in an otherwise Latin syntax. We mark these cases with `Variant=Greek` on top of all other morphological features. Whereas this phenomenon is quite common for nouns, Greek morphology seems not to occur with regard to verbs.

This is different than simply marking words of Greek origin which comply to "regular" Latin inflectional classes: a `Variant=Greek` form has to deviate from Latin inflectional paradigms and to correspond to a Greek one (on the basis of possibly different transcriptions), so that e.g. acc. *basim* 'basis' from *basis* does not receive `Variant=Greek`. 

#### Examples

*(nom. = nominative [case](la-feat/Case), acc. = accusative, gen. = genitive; pl. = plural, singular elsewhere; gr. = Greek)*

* nom. ***mystes*** 'priest of secret rites', gen. *mystae*, masculine [first declension](la-feat/InflClass), gr. *μύστης*; cf. "regular" *mysta*
* acc. ***Lethen*** 'forgetfulness (name of a river in the Underworld)', nom. *Lethe*, feminine first declension, gr. acc. *Λήθην* from nom. *Λήθη*; a "regular" Latin form would be *Letham* (or *Lethem* if interpreted as a third declension)
* acc. ***delphyna*** 'dolphin', nom. *delphin*, masculine third declension, gr. acc. *δελφῖνα* from nom. *δελφίν*; in Latin one would expect *delphinem* from *delphin*
* nom./acc. ***melos*** 'tune', neuter second declension, gr. nom./acc. *μέλος*; the corresponding "regular" Latin form would be *melum* (or a masculine *melus*)
* gen. ***metamorphoseos*** '(of a/the) metamorphosis', nom. *metamorphosis*, feminine third declension, gr. gen. *μεταμορφώσεως* from nom. *μεταμόρφωσις*; one would expect the "regular" Latin form *metamorphosis* (identical to the nominative)