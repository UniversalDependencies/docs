---
layout: base
title:  'Introduction'
permalink: hy/overview/introduction.html
udver: '2'
---

# Introduction

UD currently contains one treebank for Eastern Armenian:

* UD_Armenian

## UD Armenian

[Github repository](https://github.com/UniversalDependencies/UD_Armenian/)  

UD_Armenian is based on the ՀայՇտեմ - ArmTDP-East dataset (version 1.0), a mix of random sentences sampled from different sources and representing different genres and domains, released in several formats (local on-line newspaper and journal articles, contemporary fiction), originally annotated by a team led by Marat M. Yavrumyan at the Yerevan State University. The annotation scheme was developed in according to the UD guidelines. All data were checked manually. The tokenization and POS-tagging process was carried out through alternating steps of automatic scripting and manual revision in the YerevaNN research lab (led by Hrant H. Khachatrian).

UD_Armenian comprises 564 sentences and 12216 tokens. Documentation is provided by Marat M. Yavrumyan and Anna S. Danielyan.

The first preliminary release was issued in April 2018, for the CoNLL-2018 shared task.

### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation and tokenization was automatically done using [ՀայՆիշ-ArmTDP tokenizer](https://github.com/Armtreebank/Tokenizer). Additional changes (splitting and merging) were done manually during the annotation. |
| FORM |  |
| LEMMA | Generated automatically from FORM using Eastern Armenian lexicons and then hand-corrected. |
| UPOSTAG | Generated automatically from LEMMA and then hand-corrected. |
| XPOSTAG | _ (currently unused) |
| FEATS | Generated automatically from LEMMA and then hand-corrected. |
| HEAD | Annotated manually. |
| DEPREL | Annotated manually. |
| DEPS | _ (currently unused) |
| MISC | Information about token spacing. |

### Acknowledgments

* This work became possible in part by a research grant from the Armenian National Science and Education Fund (ANSEF) based in New York, USA.
* We are deeply grateful to ANSEF, also to Lragir.am, 1in.am and Yavruhrat Publishing for letting us download and exploit their articles as text material under the terms of educational use.
