---
layout: feature
title: 'Clitic'
shortdef: 'clitic'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature. Is this a clitic written together with the previous word?

### <a name="Yes">`Yes`</a>: it is abbreviation

#### Examples

* _Ngarrka<b>rna</b> nyangu_ “I saw a man” (lit. man(ABS)-1SG(SUBJ) see-PAST)

<!-- https://wikis.swarthmore.edu/ling073/Warlpiri/Grammar -->
A Warlpiri clause normally contains an auxiliary that specifies the tense or aspect and
cross-references the person and number of the subject and object. The cross-referencing
(agreement) morphemes are really agreement markers and parts of the auxiliary rather than
pronouns. They may occur together with real pronouns, as the 1SG subject marker _rna_ in

* _Ngaju ka<b>rna</b> purlami._ “I am shouting.” (lit. I-ABS PRES-1SG(SUBJ) shout-NONPAST)
* _Ngajulurlu ka<b>rna</b>ngku nyuntu nyanyi._ “I see you.” (lit. I-ERG PRES-1SG(SUBJ)-2SG(OBJ) you(SG.ABS) see-NONPAST)

In the above examples, the stem _ka_ encodes the present tense. However, for the perfect
aspect, the stem of the auxiliary is empty and the subject agreement marker then attaches as
a clitic to the first word of the clause:

* _Ngajulurlu<b>rna</b> yankirri panturnu, ngapa ngarninjakurra._ “I speared the emu while it was drinking water.” (lit. I-ERG-1SG(SUBJ) emu(ABS) spear-PAST water(ABS) drink-INF-while)
* _Ngarrka<b>rna</b> nyangu wawirri pantirninjakurra._ “I saw a man spear a kangaroo.” (lit. man(ABS)-1SG(SUBJ) see-PAST kangaroo(ABS) spear-INF-while)

In these cases we split the clitic off the host word, give it its own node in the dependency
structure, and mark it with the feature `Clitic=Yes`.

<!-- Interlanguage links updated St lis 3 20:58:18 CET 2021 -->
