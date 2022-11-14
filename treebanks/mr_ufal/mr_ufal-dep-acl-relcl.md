---
layout: base
title:  'Statistics of acl:relcl in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-acl.html">acl</a></tt>.

5 nodes (0%) are attached to their parents as `acl:relcl`.

4 instances of `acl:relcl` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	भावा	भाव	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	3	nmod:poss	_	Translit=bhāvā|LTranslit=bhāva
2	ची	चा	ADP	_	Gender=Fem|Number=Sing	1	case	_	Translit=cī|LTranslit=cā
3	रक्तबंबाळ	रक्तबंबाळ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	Translit=raktabaṁbāḷa|LTranslit=raktabaṁbāḷa
4	झालेली	होणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Part	5	acl:relcl	_	Translit=jhālelī|LTranslit=hoṇe
5	मांडी	मांडी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	Translit=māṁḍī|LTranslit=māṁḍī
6	पाहून	पहाणे	VERB	_	Aspect=Perf|VerbForm=Conv	10	advcl	_	Translit=pāhūna|LTranslit=pahāṇe
7	बहिणी	बहिण	NOUN	_	Case=Abs|Gender=Fem|Number=Sing	9	nmod:poss	_	Translit=bahiṇī|LTranslit=bahiṇa
8	चे	चा	ADP	_	Gender=Masc|Number=Plur	7	case	_	Translit=ce|LTranslit=cā
9	डोळे	डोळा	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	Translit=ḍoḷe|LTranslit=ḍoḷā
10	भरून	भरणे	VERB	_	Aspect=Perf|VerbForm=Conv	0	root	_	Translit=bharūna|LTranslit=bharaṇe
11	आले	येणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Fin	10	compound:svc	_	SpaceAfter=No|Translit=āle|LTranslit=yeṇe
12	.	.	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl:relcl	color:blue
1	जो	जो	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	Translit=jo|LTranslit=jo
2	सत्या	सत्य	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	5	obl	_	Translit=satyā|LTranslit=satya
3	साठी	साठी	ADP	_	_	2	case	_	Translit=sāṭhī|LTranslit=sāṭhī
4	उभा	उभा	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	5	compound:lvc	_	Translit=ubhā|LTranslit=ubhā
5	राहतो	रहाणे	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	Translit=rāhato|LTranslit=rahāṇe
6	त्या	तो	PRON	_	Deixis=Remt|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nmod:poss	_	Translit=tyā|LTranslit=to
7	चा	चा	ADP	_	Gender=Masc|Number=Sing	6	case	_	Translit=cā|LTranslit=cā
8	देव	देव	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	Translit=deva|LTranslit=deva
9	मरत	मरणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	Translit=marata|LTranslit=maraṇe
10	नाही	असणे	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	9	aux	_	SpaceAfter=No|Translit=nāhī|LTranslit=asaṇe
11	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~


