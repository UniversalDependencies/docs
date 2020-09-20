---
layout: base
title:  'UD_Persian-PerDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Persian PerDT

Language: [Persian](/fa/index.html) (code: `fa`)<br/>
Family: Indo-European, Iranian

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Mohammad Sadegh Rasooli, Pegah Safari, Amirsaeid Moloodi, and Alireza Nourian. Please refer to the follwoing work, if you use this data:

* Mohammad Sadegh Rasooli, Pegah Safari, Amirsaeid Moloodi, and Alireza Nourian. "The Persian Dependency Treebank Made Universal". 2020 (to appear)

Repository: [UD_Persian-PerDT](https://github.com/UniversalDependencies/UD_Persian-PerDT)<br />

License: CC BY-SA 4.0

Genre: news, fiction, medical, legal, social, spoken, nonfiction

Questions, comments?
General annotation questions (either Persian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](hhttps://github.com/UniversalDependencies/UD_Persian-PerDT).
If you want to collaborate, please contact [rasooli&nbsp;•&nbsp;seas.upenn.edu].
Development of the treebank happens in [a parent repository.](https://github.com/phsfr/UD_Persian-PerDT)
If there are bugs, either the original data source or the conversion procedure must be fixed.
Please submit pull requests against dev branch of the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually, automatically converted to UD |
| Relations | annotated manually, automatically converted to UD with some manual corrections |

## Description
The Persian Universal Dependency Treebank (PerUDT) is based on Persian Dependency Treebank (PerDT) (Rasooli et al.,2013). The original Treebank consists of 29K sentences sampled from contemporary Persian text in different genres including: news, academic papers, magazine articles and fictions.

This treebank was annotated based on a language-specific schema and its automatic conversion involved three main steps: revising tokenization, POS mapping and dependency mapping.

In tokenization step, in order to separate multiword inflections of simple verbs grouped as one token in PerDT, we followed the guidelines in (Rasooli et al., 2013, Table 3) to automatically find the main verbs. Also we automatically separated pronominal clitics.

In POS conversion step, we used the state of the art BERT-based Persian NER tagger (Taher et al.,2020) with manual corrections to extend recall. Through seven different entities detected by tagger, we used Person and Location to mark PROPN tags.

PerDT contains 43 syntactic relations with no straightforward mapping for most of them, conjunctions arranged from the beginning of the sentence to the end and more importantly, prepositions regarded as the head of prepositional phrases and auxiliary verbs as the head of sentences. So we rearranged the order of conjunctions from end to the beginning through a script and tailored rules to convert each kind of relation to its UD version properly. Through the whole process and at the end of each step, we investigated the results and applied manual corrections if it was needed.


### References

*  Mohammad Sadegh Rasooli, Manouchehr Kouhestani, and Amirsaeid Moloodi. "Development of a Persian syntactic dependency treebank." Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies. 2013.

*  Ehsan Taher, Seyed Abbas Hoseini, and Mehrnoush Shamsfard. "Beheshti-NER: Persian named entity recognition Using BERT." arXiv preprint arXiv:2003.08875 (2020).

*  Mohammad Sadegh Rasooli, Pegah Safari, Amirsaeid Moloodi, and Alireza Nourian. "The Persian Dependency Treebank Made Universal". 2020 (to appear).



## Acknowledgments
Thanks to Morteza Rezaei-Sharifabadi for helping with the copyright of this data.



# Statistics of UD Persian PerDT

| Split | #Sent. | #Tok. | #word | #Type Lemma | #Verbs |
|-------|--------|-------|-------|-------------|--------|
| Train |  26196 |  459K | 34.9K |    20.7K    |  5275  |
| Dev   |  1456  |  26K  |  7.0K |     5.2K    |  1427  |
| Test  |  1455  |  24K  |  6.7K |     5.1K    |  1671  |
| All   |  29107 |  501K | 36.7K |    21.6K    |  5413  |

* Dep. relations: 36 of which 3 of them are language-specific.


## POS Tags

ADJ – ADP – ADV – AUX – CCONJ – DET – INTJ – NOUN – NUM – PART – PRON – PROPN – PUNCT – SCONJ – VERB – X

## Features

Mood – Number – Person – Polarity – PronType – Tense – VerbForm – Voice

## Relations

acl – advcl – advmod – amod – appos – aux – aux:pass – case – cc – ccomp – compound – compound:lv – compound:lvc – conj – cop – csubj – dep – det – dislocated – fixed – flat:name – flat:num – goeswith – iobj – mark – nmod – nsubj – nsubj:pass – nummod – obj – obl – obl:arg – parataxis – punct – root – vocative – xcomp

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 29107 sentences, 366005 tokens and 135771 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 43893 tokens (8%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 7173 multi-word tokens.</li>
</ul>

<ul>
<li>This corpus contains 50 words with both letters and punctuation such as: اچ.آی.وی , ه.ق, Fax.com, بتا-گاما </li>
</ul>

<h2>Morphology</h2>
<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): آیا, مگر, که, دیگر</li>
</ul>

<ul>
<li>This corpus contains 54 lemmas tagged as pronouns (PRON): آن,خود, هم, او, وی, آنها, این, ما, خودم, من, تو, آنان, یکدیگر, ایشان, بنده, خویش, آنچه, آن‌ها, خودشان, خودش, همدیگر, همین, شما, آنجا, چه, اینها, چنین, همان, خودت, خودمان, خویشتن, دیگران, کجا, کی, خودتان, که, چنان, کو, همه, دیگری, هیچ, بعضی, چی, کس, اینجانب, همانها, اینان, آنچنان, این‌ها, ماها, کدام, چقدر, آها, همینان</li>
</ul>

<ul>
<li>This corpus contains 60 lemmas tagged as determiners (DET): این ,همین ,آن ,چند ,هر ,دیگر ,همه ,بعضی ,چندین ,همان ,چندی ,هیچ ,هزاران ,چه ,چنین ,برخی ,عده‌ای ,چنان ,یک ,فلان ,کدام ,مقدار ,عجب ,تنها ,هزار ,دو ,خیلی ,کدامین ,تک ,گاهی ,اکثر ,چندان ,کلیه ,کمی ,مقداری ,بسیاری ,کمتر ,تعداد ,تعدادی ,عده ,پاره ,چندصد ,هوار ,سراسر ,چندمین ,ابن ,گروهی ,چقدر ,بسی ,بسیار ,دین ,اندکی ,چگونه ,هرچه ,گروه ,بدین ,ساعت‌ها ,مدت‌ها ,سالیان ,ان</li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: #است ,بود#باش ,#هست.</li>
</ul>

<ul>
<li>This corpus uses 20 lemmas as auxiliaries (<a>aux</a>). Examples: #است ,بود#باش ,بایست#باید ,خواست#خواه ,بر#خواست#خواه ,#توان ,شد#شد ,شد#شو ,توانست#توان ,داشت#دار ,فرو#خواست#خواه ,در#خواست#خواه ,باز#خواست#خواه ,کرد#کن ,شایست#شاید ,وا#خواست#خواه ,فرا#خواست#خواه ,گشت#گرد ,داد#ده ,ور#خواست#خواه.</li>

<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>) : شد#شو.</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: aux:pass, compound:lv, compound:lvc, flat:name, flat:num, nsubj:pass, obl:arg.</li>
<li>The compound:lv and flat:num relations are unique in this treebank due to idiosyncratic relations.</li>
</ul>
