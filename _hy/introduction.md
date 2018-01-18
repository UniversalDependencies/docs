---
layout: base
title:  'Introduction'
permalink: hy/overview/introduction.html
udver: '2'
---

# Introduction

UD currently contains one treebank for Armenian (Eastern):

* The Eastern Armenian data come from the ՀայՇտեմ - ArmDT-East dataset (version 1.0): a mix of random sentences sampled from different sources and representing different genres and domains, released in several formats (local on-line newspaper and journal articles, contemporary fiction, textbooks). UD Eastern Armenian is a conversion of the ArmDT-East dataset originally annotated and manually checked by a team led by Marat M. Yavrumyan at the Yerevan State University and by Hrant H. Khachatryan in YerevaNN research lab (Yerevan).

Below we give a brief description of UD Eastern Armenian treebank. More information can be found in the respective README files.

## UD Armenian (Eastern)
[https://github.com/UniversalDependencies/UD_Armenian/](https://github.com/UniversalDependencies/UD_Armenian/)  

UD Armenian is based on the ՀայՇտեմ - ArmDT-East dataset (version 1.0) originally annotated by the team led by Marat M. Yavrumyan. It consists of --- sentences and --- tokens. The annotation scheme was developed in according to the UD guidelines. All data were checked manually. Documentation is provided by Marat M. Yavrumyan and Anna S. Danielyan.

### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation and tokenization was automatically done using [HyNish-ArmDT tokenizer](). Additional changes (splitting and merging) were done manually during the annotation. |
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

* This work was made possible in part by a research grant from the Armenian National Science and Education Fund (ANSEF) based in New York, USA.
* We are deeply grateful to ANSEF, also to Lragir.am, 1in.am and Yavruhrat Publshing for letting us download and exploit their articles as text material under the terms of educational use.
