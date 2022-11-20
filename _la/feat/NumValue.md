---
layout: feature
title: 'NumValue'
shortdef: 'numeric value'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#1">1</a></td>
  <td><a href="#2">2</a></td>
</tr>
</table>

This feature is introduced to treat some elements which, though implying a specific cardinality, do not seem to belong to the class of [numerals](la-pos/NUM), as they rather have other deictic or [pronominal characteristics](la-feat/PronType) as their main meaning, and so are better identified as part of the more general class of [determiners](la-pos/DET). This fact might be reflected also from morphological properties. Only the lowest values 1 and 2 are involved, whose linguistic exceptionality with respect to other numbers can be observed also from other phenomena, e.g.the unique [ordinal](la-feat/NumType) [adjectives](la-pos/ADJ) *primus* 'first' and *secundus* 'second', tied to *unus* 'one' and *duo* 'two', versus *tertius* 'third', *quartus* 'fourth', *quintus* 'fifth'... tied to *tres* 'three', *quattuor* 'four', *quinque* 'five'... 


### <a name="1">`1`</a>: numeric value 1

The term for 'one' is ambivalent, as traditionally it is interpreted as either referring to the exact quantity '1', or as having an indefinite value. Since the latter is still always referred to a single entity, it is debatable how much the two meanings are distinct, or if one prevails, so that probably a more generic treatment as [`DET`](la-pos/DET) involving both [`NumType=Card`](la-feat/NumType) and [`PronType=Ind`](la-feat/PronType), alongside `NumValue`, can act as a good representation of this fact; cf. (Grotto et al., 2021) for difficulties of annotation.

#### Examples

* ***unus*** 'one; a(n)'
    * this word follows the [pronominal inflectional paradigm](la-feat/InflClass#LatPron) (common singular genitive *unīus*, common singular dative *unī*), which puts it closer to other determiners than to numerals
* ***uter*** 'which, either of two' could be a candidate for this value
    * this word also follows the pronominal paradigm: common singular genitive *utrīus*, common singular dative *utrī*

### <a name="2">`2`</a>: numeric value 2

#### Examples

* ***ambo*** 'both'
    * two elements are involved, but the focus is on considering them together at the same time, as opposed to *uter* 'either one', and not on the exact number as for *duo* 'two', so it receives [`PronType=Tot`](la-feat/PronType#Tot)

### References

* Grotto, F., R. Sprugnoli, M. Fantoli, M. Simi, F. M. Cecchini, and M. Passarotti (2021). *The Annotation of Liber Abbaci, a Domain-Specific Latin Resource*, in Proceedings of the Eighth Italian Conference on Computational Linguistics (CLiC-it 2021), Milan, Italy: [CEUR-WS.org](http://ceur-ws.org/Vol-3033/paper24.pdf).


<!-- Interlanguage links updated Po lis 14 15:34:52 CET 2022 -->
