---
layout: base
title:  'Statistics of aux:pass in UD_Marathi-CMUPAN'
udver: '2'
---

## Treebank Statistics: UD_Marathi-CMUPAN: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="mr_cmupan-dep-aux.html">aux</a></tt>.

2144 nodes (2%) are attached to their parents as `aux:pass`.

2131 instances of `aux:pass` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28964552238806.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="mr_cmupan-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_cmupan-pos-AUX.html">AUX</a></tt> (2126; 99% instances), <tt><a href="mr_cmupan-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_cmupan-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="mr_cmupan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mr_cmupan-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="mr_cmupan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_cmupan-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="mr_cmupan-pos-ADP.html">ADP</a></tt>-<tt><a href="mr_cmupan-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:pass	color:blue
1	वर्षानुवर्ष	वर्षानुवर्ष	NOUN	_	_	5	obl	_	Translit=varshanuvarsha|LTranslit=varshanuvarsha
2	एकाच	एक	NUM	_	Gender=Masc|Number=Sing|NumType=Card	3	nummod	_	Translit=ekacha|LTranslit=eka
3	प्रकारचे	प्रकार	NOUN	_	Case=Acc|Number=Sing	4	nmod	_	Translit=prakarache|LTranslit=prakara
4	चक्र	चक्र	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	obj	_	Translit=chakra|LTranslit=chakra
5	अवलंबिले	अवलंब	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Translit=avalambile|LTranslit=avalamba
6	जात	जाणे	AUX	_	VerbForm=Fin	5	aux:pass	_	Translit=jata|LTranslit=jane
7	नाही	असणे	AUX	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	Translit=nahi|LTranslit=asane
8	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 aux:pass	color:blue
1	कारखान्याकडील	कारखाना	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obl	_	Translit=karakhanyakadila|LTranslit=karakhana
2	बैलगाडीवरील	बैलगाडी	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	Translit=bailagadivarila|LTranslit=bailagadi
3	ऊसतोडणी	ऊसतोडणी	ADJ	_	_	6	nsubj	_	Translit=usatodani|LTranslit=usatodani
4	मजूर	मजूर	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	Translit=majura|LTranslit=majura
5	गावाकडे	गाव	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	Translit=gavakade|LTranslit=gava
6	परत	परत	ADV	_	_	0	root	_	Translit=parata|LTranslit=parata
7	गेले	जाणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	xcomp	_	Translit=gele|LTranslit=jane
8	आहेत	असणे	AUX	_	Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	Translit=aheta|LTranslit=asane
9	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 aux:pass	color:blue
1	प्रत्यक्षात	प्रत्यक्षात	NOUN	_	_	11	obl	_	Translit=pratyakshata|LTranslit=pratyakshata
2	मात्र	मात्र	PART	_	_	1	dep	_	Translit=matra|LTranslit=matra
3	या	या	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	Translit=ya|LTranslit=ya
4	ठिकाणी	ठिकाण	NOUN	_	Case=Acc|Number=Sing	11	obl	_	Translit=thikani|LTranslit=thikana
5	नवी	नवा	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	6	compound	_	Translit=navi|LTranslit=nava
6	मुंबईतील	मुंबई	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	10	nmod	_	Translit=mumbaitila|LTranslit=mumbai
7	सर्वात	सर्व	DET	_	Number=Sing|PronType=Ind	8	advmod	_	Translit=sarvata|LTranslit=sarva
8	मोठा	मोठा	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	10	amod	_	Translit=motha|LTranslit=motha
9	फर्निचर	फर्निचर	PROPN	_	Case=Nom|Number=Sing	10	compound	_	Translit=pharnichara|LTranslit=pharnichara
10	झोन	झोन	PROPN	_	_	11	nsubj	_	Translit=jhona|LTranslit=jhona
11	उभा	उभा	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Translit=ubha|LTranslit=ubha
12	राहिला	राह	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	xcomp	_	Translit=rahila|LTranslit=raha
13	आहे	असणे	AUX	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	Translit=ahe|LTranslit=asane
14	.	.	PUNCT	_	_	11	punct	_	Translit=.|LTranslit=.

~~~


