---
layout: feature
title: 'Clitic'
shortdef: 'cliticness'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

This is a binary (yes/no) feature that is only annotated when its value is `Yes`.

### <a name="Yes">`Yes`</a>: word appearing as a clitic

The notion of "cliticness" implied by this feature is mostly grounded in orthographic conventions; morphological factors are also considered, while phonological ones cannot be accounted for. 

This means that a <u>syntactic word</u> which is identified as part of a multi-word token and either is only ever written in such a configuration (i.e. acts as a bound morpheme), or only plays a functional role in it (e.g. an [adposition](la-pos/ADP) or [determiner](la-pos/DET)) will be marked for a positive value of the `Clitic` feature; lexically full elements of such combinations will not receive `Clitic=Yes`. On the contrary, a word which might reasonably be considered a clitic (phonologically or otherwise), e.g. any preposition, but is not set down in writing as such, will not be marked for `Clitic`. 

Clitcs depend on other words of a clause with the required usual syntactic relations.

It might happen that the same combination of words is written differently in different sources: the `Clitic` feature will be used only when the involved words are orthographically united.

Derivational morphemes or other elements which are not syntactically independent never determine the splitting of a token or the annotation of the `Clitic` feature.

#### Examples

* *me**cum*** 'with me', split as *me*-*cum*: *cum* is a clitic [postposition](la-feat/AdpType) (`ADP`) depending on *me* as `case`
    * normally occurs independently, this is a crystallized construction with personal pronouns
* *se**ipsum*** 'himself (acc.)', split as *se*-*ipsum*: *ipsum*, lemma *ipse*, is a clitic [emphatic](la-feat/PronType) determiner (`DET`, deprel `det`) of *se* (reflexive third-person pronoun)
    * usually occurs independently, but it can appear as a clitic with personal pronouns 
* *populus**que*** 'and the people', split as *populus*-*que*: *que* is a clitic [co-ordinating conjunction](la-pos/CCONJ) (`CCONJ`) and depends on the given phrase/clause head as `cc`
    * *que* appears only as a bound element; it has become grammaticalised in some words

<!-- Interlanguage links updated St lis 3 20:58:18 CET 2021 -->
