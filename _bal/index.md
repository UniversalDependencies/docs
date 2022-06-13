---
layout: base
title:  'Balochi UD'
udver: '2'
---

# UD for Balochi <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IR.svg" /></span>

Balochi is a dialect continuum and until recently, the language was rarely written, so there does not seem
to be a written standard with enough prestige to prevail on the vast territory where Balochi is spoken.
One standard was proposed by Jahani (2019); note however that the texts in our data follow a different
orthography. Unless specified otherwise, our data represent southeastern (Pakistani) Balochi.

## Tokenization and Word Segmentation

* Punctuation is written adjacent to a neighboring word like in English and many other languages.
  In the annotation, punctuation symbols are separate tokens; that is, words are delimited by spaces or punctuation.

## Morphology

Some morphemes that are treated as bound morphemes in the literature are in fact written as separate words under
the orthography employed in our data. This applies both to the case suffixes of nouns and to the conjugation
suffixes of verbs.

### Nominal Features

There is no grammatically relevant gender.

According to Jahani and Korn (2009) p.&nbsp;652, Balochi nouns have five cases, termed direct, oblique, object, genitive,
and vocative. We map the first three cases to other names in the UD terminology. Under the orthography used
in our data, case suffixes are written as separate words, they are thus analyzed as postpositions ([ADP]()).
The [Case]() feature is annotated on the postposition that contributes the case, not on the noun itself.

The direct case roughly corresponds to the nominative in UD. It is used for the subject of all intransitive
verbs and of transitive verbs in the present and future. Balochi has split ergativity like Indian languages,
hence transitive verbs in the past tense have the ergative alignment, meaning that the object rather than
the subject has this case form there. It is the simple uninflected noun. In our orthography it means that
there is no postposition, hence `Case=Nom` is not annotated anywhere.

The oblique case is marked by the postposition ءَ _'a_. It is used as the accusative in the present and
future, and as the ergative subject in the past tense. It is also placed between the noun and some more
specific postpositions. We annotate it `Case=Erg`.

In ditransitive clauses, the object case marks the recipient, i.e., it corresponds to the
dative (`Case=Dat`). Its morpheme is را _rā_ and it may be combined with the oblique morpheme ءَ _'a_.

The genitive morpheme is ءِ _'i_ and it is also written separately. We annotate it `Case=Gen`.

Vocative is unmarked in singular.

Nominal words can appear in two [Number]() forms, singular (`Sing`) and plural (`Plur`). However, the
number inflection is fused with the case inflection, that is, plural marking would be part of the
case postposition, and there is no number distinction in the direct (nominative) case.

### Pronouns

Personal pronouns exist in the first and the second person. Distal demonstratives are used instead of
personal pronouns in the third person. The reflexive pronoun is _wat_.

<table>
<tr><td>من</td><td><i>man</i></td><td>I</td><td><tt>Number=Sing|Person=1|PronType=Prs</tt></td></tr>
<tr><td>تو</td><td><i>tō</i></td><td>you</td><td><tt>Number=Sing|Person=2|PronType=Prs</tt></td></tr>
<tr><td>ما</td><td><i>mā</i></td><td>we</td><td><tt>Number=Plur|Person=1|PronType=Prs</tt></td></tr>
<tr><td>شُما</td><td><i>šumā</i></td><td>you</td><td><tt>Number=Plur|Person=2|PronType=Prs</tt></td></tr>
<tr><td>آ</td><td><i>ā</i></td><td>he/she/it/they/that/those</td><td><tt>Deixis=Remt|PronType=Dem</tt></td></tr>
<tr><td>اے</td><td><i>ē</i></td><td>this/these</td><td><tt>Deixis=Prox|PronType=Dem</tt></td></tr>
<tr><td>وت</td><td><i>wat</i></td><td>oneself</td><td><tt>PronType=Prs|Reflex=Yes</tt></td></tr>
</table>

Possessive pronouns are generally the personal pronouns with the genitive suffix _-ī_; but unlike nouns,
they are written together with the suffix as one word. We treat them as distinct lexemes with their own
lemma and with the `Poss=Yes` feature, not as genitive forms of the non-possessive personal pronouns.
The form ending in _-ī_ are used attributively; there are also predicative forms with an additional _-g_.
**TODO: Is there a feature we can use to distinguish the predicative form?**

At least for the distal demonstrative, the genitive/possessive form is also used before the oblique case
marker. For example, آئی ءَ <i>ā'ī 'a (áiá)</i> is the oblique/accusative/ergative case;
آئی ءَ را <i>ā'ī 'a rā (áiárá)</i> is the object/dative case of “that”.

<table>
<tr><td>منی</td><td><i>manī</i></td><td>my</td><td><tt>Number=Sing|Person=1|Poss=Yes|PronType=Prs</tt></td></tr>
<tr><td>منیگ</td><td><i>manīg</i></td><td>my</td><td><tt>Number=Sing|Person=1|Poss=Yes|PronType=Prs</tt></td></tr>
<tr><td>تئی</td><td><i>ta'ī</i></td><td>your</td><td><tt>Number=Sing|Person=2|Poss=Yes|PronType=Prs</tt></td></tr>
<tr><td>تئیگ</td><td><i>ta'īg</i></td><td>yours</td><td><tt>Number=Sing|Person=2|Poss=Yes|PronType=Prs</tt></td></tr>
<tr><td>آئی</td><td><i>ā'ī</i></td><td>his/her/its/their/of that/of those</td><td><tt>Deixis=Remt|Poss=Yes|PronType=Dem</tt></td></tr>
<tr><td>وتی</td><td><i>watī</i></td><td>one's own</td><td><tt>Poss=Yes|PronType=Prs|Reflex=Yes</tt></td></tr>
</table>

Like in English, the reciprocal pronoun is composed of two words.
**TODO: What to do with it? Do the words occur also independently?**

<table>
<tr><td>یکے دومی</td><td><i>yakē dōmī</i></td><td>each other</td><td><tt>PronType=Rcp</tt></td></tr>
</table>

Interrogative pronouns.

<table>
<tr><td>کئیا</td><td><i>ka'iyā</i></td><td>who</td><td><tt>PronType=Int</tt></td></tr>
<tr><td>چے</td><td><i>čē</i></td><td>what</td><td><tt>PronType=Int</tt></td></tr>
</table>

Indefinite article??? (At least that was the gloss assigned by the Balochi teacher.)
It would apply to the preceding nominal.
یے _yē_

### Verbal Features

The conjugation suffixes of Balochi verbs come out as auxiliaries that follow the main verb. Example:

<table>
<!-- I got these examples from Zahoor by e-mail (2022-06-07), except for 1-Plur-Pres, which I constructed following Jahani and Korn (2009) p. 660. -->
<tr><td>کندگ</td><td><i>kandag</i></td><td>to laugh / laughing</td><td><tt>VerbForm=Inf</tt></td></tr>
<tr><td>من کندگا آں</td><td><i>man kandagā āñ</i></td><td>I am laughing</td><td>The auxiliary is <tt>Number=Sing|Person=1</tt>. The main verb should probably be some non-finite form, maybe a participle. And maybe a progressive participle (I saw a similar form glossed as "progressive aspect of verb".)</td></tr>
<tr><td>تو کندگا ئے</td><td><i>tō kandagā ay</i></td><td>you (<tt>Sing</tt>) are laughing</td><td></td></tr>
<tr><td>آ کندگا اِنت</td><td><i>ā kandagā int</i></td><td>he is laughing</td><td></td></tr>
<tr><td>ما کندگا اِن</td><td><i>mā kandagā in</i></td><td>we are laughing</td><td></td></tr>
<tr><td>شُما کندگا اِت</td><td><i>šumā kandagā it</i></td><td>you (<tt>Plur</tt>) are laughing</td><td></td></tr>
<tr><td>آ کندگا اَنت</td><td><i>ā kandagā ant</i></td><td>they are laughing</td><td></td></tr>
<tr><td>تو کند اِت</td><td><i>tō kand it</i></td><td>you (<tt>Sing</tt>) laughed</td><td></td></tr>
<tr><td>تو کند اِتگ</td><td><i>tō kand itag</i></td><td>you (<tt>Sing</tt>) have laughed</td><td></td></tr>
</table>

The infinitive can be used and inflected as a verbal noun.

The auxiliary forms are similar or identical to the copula which would be used with non-verbal predicates.

Present-tense auxiliaries from the data:
اِنت _int_ (3rd person Sing; this form is also the copula “is”)
اَنت _ant_ (3rd person Plur; but the context could have been also past rather than present)

Past-tense auxiliaries from the data:
اِت _it_ (3rd person Sing)
کت _kt_ (3rd person Sing)
کُت _kut_ (is it the same as _kt_ or not?)
جت _jt_ (perhaps this is not auxiliary? It was in the causative sentence.)

### Adpositions

Besides the three case morphemes that were mentioned above (and that are considered mere suffixes by some
authors), there are also “ordinary” adpositions.

<table>
<tr><td>چہ</td><td><i>čh</i></td><td>from (<tt>Case=Abl</tt>)?</td></tr>
</table>

### Coordinating Conjunctions

<table>
<tr><td>ءُ</td><td><i>'u</i></td><td>and</td></tr>
<tr><td>یا</td><td><i>yā</i></td><td>or</td></tr>
<tr><td>بلے</td><td><i>balē</i></td><td>but</td></tr>
</table>

### Particles

The negative particle نہ _nah_.

Particle at the end of the sentence:
ئے _ē_ (perhaps a question particle?)
ئِے _yie_ (the same or not?)

### Tags

*

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/bal-comparison.html) Balochi UD treebanks:

  * [Balochi-A](../treebanks/bal_a/index.html)
  * [Balochi-B](../treebanks/bal_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---

## References

* Carina Jahani, Agnes Korn (2009). Balochi. In: Gernot Windfuhr (ed.) The Iranian Languages, pp. 634–692. Routledge, Oxon, UK. ISBN 978-0-415-62235-6.
* Carina Jahani (2019). [A Grammar of Modern Standard Balochi](https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-397659). In: Acta Universitatis Upsaliensis. Studia Iranica Upsaliensia 36. 292 pp. Uppsala, Sweden. ISSN 1100-326X. ISBN 978-91-513-0820-3.
