---
layout: base
title:  'Statistics of acl in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="el_gdt-dep-acl-relcl.html">acl:relcl</a></tt>.

279 nodes (0%) are attached to their parents as `acl`.

269 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3584229390681.

The following 13 pairs of parts of speech are connected with `acl`: <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (221; 79% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (19; 7% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Εάν	αν	SCONJ	SCONJ	_	2	mark	_	_
2	ξέραμε	ξέρω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	τότε	τότε	ADV	ADV	_	7	advmod	_	_
5	δεν	δεν	PART	PART	_	7	advmod	_	_
6	θα	θα	AUX	AUX	_	7	aux	_	_
7	είχαμε	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	χρόνο	χρόνος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_
9	να	να	AUX	AUX	_	10	aux	_	_
10	υπηρετήσουμε	υπηρετώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	8	acl	_	_
11	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	λαό	λαός	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
13	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 acl	color:blue
1	Σ	σε	ADP	ADP	_	3	case	_	_
2	τις	ο	DET	DET	Case=Acc|Gender=Fem|Number=Plur	3	det	_	_
3	επιτροπές	επιτροπή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	6	obl	_	_
4	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	βουλευτές	βουλευτής	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
6	συζητούν	συζητώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	για	για	ADP	ADP	_	8	case	_	_
8	σχέδια	σχέδιο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	6	obl	_	_
9	νόμου	νόμος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
10	με	με	ADP	ADP	_	11	case	_	_
11	βάση	βάση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
12	παρωχημένα	παρωχημένος	VERB	VERB	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	13	amod	_	_
13	σχέδια	σχέδιο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	11	acl	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 acl	color:blue
1	Σε	σε	ADP	ADP	_	2	case	_	_
2	ό,τι	ό,τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Rel	12	obl	_	_
3	αφορά	αφορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
4	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	διαγωγή	διαγωγή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
6	σ	σε	ADP	ADP	_	8	case	_	_
7	την	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing	8	det	_	_
8	τάξη	τάξη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	2	punct	_	_
10	δεν	δεν	PART	PART	_	12	advmod	_	_
11	είμαι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	12	cop	_	_
12	βέβαιος	βέβαιος	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
13	ότι	ότι	SCONJ	SCONJ	_	17	mark	_	_
14	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Ένωση	ένωση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	_
16	θα	θα	AUX	AUX	_	17	aux	_	_
17	είχε	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	acl	_	_
18	καλές	καλός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	19	amod	_	_
19	επιδόσεις	επίδοση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


