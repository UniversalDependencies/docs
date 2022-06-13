---
layout: base
title:  'Balochi UD'
udver: '2'
---

# UD for Balochi <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IR.svg" /></span>

Balochi is a dialect continuum and until recently, the language was rarely written, so there does not seem
to be a written standard with enough prestige to prevail on the vast territory where Balochi is spoken.
One standard was proposed by Jahani (2019); note however that the texts in our data follow a different
orthography.

## Tokenization and Word Segmentation

* Punctuation is written adjacent to a neighboring word like in English and many other languages.
  In the annotation, punctuation symbols are separate tokens; that is, words are delimited by spaces or punctuation.

## Morphology

Some morphemes that are treated as bound morphemes in the literature are in fact written as separate words in Balochi.
For example, the conjugation suffixes of Balochi verbs come out as auxiliaries that follow the main verb. Example:

<table>
<!-- I got these examples from Zahoor by e-mail (2022-06-07), except for 1-Plur-Pres, which I constructed following Jahani and Korn (2009) p. 660. -->
<tr><td>کندگ</td><td><i>kandag</i></td><td>to laugh / laughing</td><td><tt>VerbForm=Inf</tt></td></tr>
<tr><td>من کندگا آں</td><td><i>man kandagā āñ</i></td><td>I am laughing</td><td>The auxiliary is <tt>Number=Sing|Person=1</tt>. The main verb should probably be some non-finite form, maybe a participle.</td></tr>
<tr><td>تو کندگا ئے</td><td><i>tō kandagā ay</i></td><td>you (<tt>Sing</tt>) are laughing</td><td></td></tr>
<tr><td>آ کندگا اِنت</td><td><i>ā kandagā int</i></td><td>he is laughing</td><td></td></tr>
<tr><td>ما کندگا اِن</td><td><i>mā kandagā in</i></td><td>we are laughing</td><td></td></tr>
<tr><td>شُما کندگا اِت</td><td><i>šumā kandagā it</i></td><td>you (<tt>Plur</tt>) are laughing</td><td></td></tr>
<tr><td>آ کندگا اَنت</td><td><i>ā kandagā ant</i></td><td>he is laughing</td><td></td></tr>
<tr><td>تو کند اِت</td><td><i>tō kand it</i></td><td>you (<tt>Sing</tt>) laughed</td><td></td></tr>
<tr><td>تو کند اِتگ</td><td><i>tō kand itag</i></td><td>you (<tt>Sing</tt>) have laughed</td><td></td></tr>
</table>

The infinitive can be used and inflected as a verbal noun.

The auxiliary forms are similar or identical to the copula which would be used with non-verbal predicates.

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
