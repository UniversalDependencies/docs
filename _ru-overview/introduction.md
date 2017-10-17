---
layout: base
title:  'Introduction'
permalink: ru/overview/introduction.html
---


# Introduction

UD currently contains three treebanks for Russian:

* UD Russian is a conversion of the Russian Wikipedia data set originally annotated and converted by Google (PI Ryan McDonald) and manually checked by the Russian UD team at the National Research University Higher School of Economics in Moscow.  
* UD Russian-SynTagRus is a conversion of the SynTagRus treebank originally annotated by a team led by Igor Boguslavsky in the Computational Linguistics Laboratory, A. A. Kharkevich Institute of Information Transmission Problems, Russian Academy of Sciences (Moscow).
* UD Russian-PUD is the Russian part of the Parallel UD (PUD) treebank.

Below we give a brief description of each treebank. More information can be found in the respective README files.

## UD Russian  
[https://github.com/UniversalDependencies/UD_Russian/](https://github.com/UniversalDependencies/UD_Russian/)  

UD Russian is based on the Russian Wikipedia data set originally annotated by the Google team led by Ryan McDonald. It consists of 4,429 sentences and 87,841 tokens. The syntactic annotation and annotation of morphological features is converted from the Google annotation scheme, while lemmatization follows the guidelines of the Russian National Corpus (Lyashevskaya, Plungian, Sichinava 2005) and is performed using MyStem-RNC tagger (Zobnin & Nosyrev 2015). All data were checked manually. Documentation is provided by Elena Shakurova, Nina Mustafina, and Olga Lyashevskaya.

### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation and tokenization was automatically done by Google. Additional changes (splitting and merging) were done manually during conversion to UD 1.3 and UD 2.0. |
| FORM |  |
| LEMMA |  |
| UPOSTAG |  |
| XPOSTAG | Converted automatically from FEATS and then hand-corrected. |
| FEATS |  |
| HEAD |  |
| DEPREL |  |
| DEPS | &mdash; (currently unused) |
| MISC | Information about token spacing. |

### Acknowledgments

We wish to thank all of the contributors to the original Google annotation effort as well as reannotation scheme developers, including Vitaly Nikolaev, Ryan McDonald, Olga Lyashevskaya, Daniel Zeman, Kira Droganova, Svetlana Toldova, Andrey Kutuzov, Yana Kurmacheva, Maria Alexeeva, Tatiana Gavrilova, Nina Mustafina, and Elena Shakurova.

### References

* Lyashevskaya, Olga, Vladimir Plungian, and Dmitry Sichinava. O morfologicheskom standarte Korpusa sovremennogo russkogo jazyka [Morphological standard of the Corpus of contemporary Russian]. In: Nacional'nyj korpus russkogo jazyka: 2003-2005 [Russian National Corpus: 2003-2005]. Moscow, 2005. Pp.111-135. [PDF](http://ruscorpora.ru/sbornik2005/08lashevs.pdf)
* Zobnin, Alexey, and Grigory Nosyrev. Morphological analyzer MYSTEM 3.0. In: Trudy Instituta Russkogo Yazyka im. V. V. Vinogradova 6.1 (2015): 300-307.


## UD Russian-SynTagRus  
[readme](https://github.com/UniversalDependencies/UD_Russian-SynTagRus/blob/dev/README.txt)

UD Russian-SynTagRus is based on the SynTagRus dependency treebank which is being developed by the Computational Linguistics Laboratory, A. A. Kharkevich Institute of Information Transmission Problems, Russian Academy of Sciences, located in Moscow.

Currently the treebank contains  over 1,000,000 tokens (over 66,000 sentences) belonging to texts from a variety of genres (contemporary fiction, popular science, newspaper and journal articles dated between 1960 and 2016, texts of online news, etc.)

The treebank is so far the only human-corrected corpus of Russian supplied with comprehensive morphological annotation and syntactic annotation in the form of a complete dependency tree provided for every sentence. Additionally, the original version of SynTagRus contains other types of annotation, first of all lexical functional annotation in terms of lexical functions as defined in the Meaning-Text model.

SynTagRus is an integral but fully autonomous part of the Russian National Corpus developed in a nationwide research project and can be freely consulted on the Web: http://www.ruscorpora.ru/instruction-syntax.html

### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID |  |
| FORM |  |
| LEMMA |  |
| UPOSTAG |  |
| XPOSTAG |  |
| FEATS |  |
| HEAD |  |
| DEPREL |  |
| DEPS | &mdash; (currently unused) |
| MISC | Information about token spacing. |

### References  

* Дяченко П.В., Иомдин Л.Л., Лазурский А.В., Митюшин Л.Г., Подлесская О.Ю., Сизов В.Г., Фролова Т.И., Цинман Л.Л. Современное состояние глубоко аннотированного корпуса текстов русского языка (СинТагРус). In: Trudy Instituta Russkogo Yazyka im. V. V. Vinogradova 6.1 (2015): 272-299. [PDF](https://elibrary.ru/download/elibrary_25390370_22875649.pdf)

### Acknowledgments


## UD Russian-PUD
[readme](https://github.com/UniversalDependencies/UD_Russian-PUD/blob/dev/README.txt)  

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies (http://universaldependencies.org/conll17/). There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.
