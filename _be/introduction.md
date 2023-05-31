---
layout: base
title:  'Introduction'
permalink: be/overview/introduction.html
udver: '2'
---

# Introduction

UD currently contains the following released and developing treebanks:

- __UD Belarusian__ is a news corpus created at Vinogradov Institute of the Russian language RAS in Moscow.

Below we give a brief description of the treebank. More information can be found in the respective github repository.

## UD Belarusian

The Belarusian UD treebank is based on a sample of the news texts included in the Belarusian-Russian parallel subcorpus of the Russian National Corpus, online search available at: http://ruscorpora.ru/search-para-be.html. 

Detailed documentation of this treebank including treatment of morphology and syntax is not currently available.

Links: <a href="https://github.com/UniversalDependencies/UD_Belarusian/">Github repository</a>

### Tokenization

The low-level tokenization of the Belarusian UD treebank generally adopts the RNC standard. See details in the Github repository.
The Belarusian UD treebank does not contain multiword tokens.

### Morphology

The morphological annotation is adopted from the Russian-Syntagrus UD guidelines and mostly compliant with the RNC morphological standard (exept for "second" cases, comp2, imper2, which were converted to the "primary" tags, and transitivity tags, which were removed). Lemmas and features were annotated manually.

### Syntax

The data were labeled semi-automatically using the annotation projection from Russian. For that purpose, Russian data were annotated using UDpipe, converted into UD 2.0, and then checked manually. After that, Belarusian dependency relation tags were checked manually.

### Sources

The source texts are short news articles originally written in Belarusian (and/)or Russian, published by telegraf.by online agency.

Document list: 
http://search2.ruscorpora.ru/search.xml?env=alpha&text=meta&sort=gr_tagging&lang=ru&doc_g_number_lang=&doc_te_author=&mode=para&doc_te_header=*&author=&doc_g_birthday=&doc_l_birthday=&doc_g_created=&doc_l_created=&doc_te_translator=&doc_lang=bel&doc_lang_trans=rus&doc_g_date_date_trans=&doc_l_date_date_trans=&doc_sphere=%EF%F3%E1%EB%E8%F6%E8%F1%F2%E8%EA%E0

### License

CC BY-SA 4.0

### Contributors

Olga Lyashevskaya

### Acknowledgments

We thank Uladzimir Koshchanka for providing the source texts. 
