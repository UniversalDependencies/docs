---
layout: base
title:  'Statistics of acl:relcl in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="el_gdt-dep-acl.html">acl</a></tt>.

1024 nodes (2%) are attached to their parents as `acl:relcl`.

1023 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.65625.

The following 22 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (819; 80% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (74; 7% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (28; 3% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (27; 3% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (21; 2% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	τρόπος	τρόπος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
3	που	που	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Rel	5	obl	_	_
4	θα	θα	AUX	AUX	_	5	aux	_	_
5	ψηφίσουμε	ψηφίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
6	σήμερα	σήμερα	ADV	ADV	_	5	advmod	_	_
7	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	cop	_	_
8	μέρος	μέρος	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
9	αυτής	αυτός	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	11	det	_	_
10	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	ευθύνης	ευθύνη	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl:relcl	color:blue
1	Είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
2	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
3	σ	σε	ADP	AsPpSp	_	5	case	_	_
4	το	ο	DET	AtDf	Case=Acc|Gender=Neut|Number=Sing	5	det	_	_
5	οποίο	οποίος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	8	obl	_	_
6	πρέπει	πρέπει	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
7	να	να	AUX	AUX	_	8	aux	_	_
8	δώσουμε	δίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
9	μεγάλη	μεγάλος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	10	amod	_	_
10	προσοχή	προσοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 acl:relcl	color:blue
1	Παρόμοιο	παρόμοιος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	2	amod	_	_
2	καθεστώς	καθεστώς	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
3	επιδιώκουν	επιδιώκουν	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	και	και	CCONJ	CCONJ	_	6	cc	_	_
5	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	πόλεις	πόλη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
7	σ	σε	ADP	AsPpSp	_	9	case	_	_
8	τα	ο	DET	AtDf	Case=Acc|Gender=Neut|Number=Plur	9	det	_	_
9	ανατολικά	ανατολικός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	6	amod	_	_
10	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Λιβύης	Λιβύη	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	16	punct	_	_
13	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
14	οποίες	οποίος	PRON	PRON	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Rel	16	nsubj	_	_
15	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	cop	_	_
16	πλούσιες	πλούσιος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	6	acl:relcl	_	_
17	σε	σε	ADP	ADP	_	18	case	_	_
18	κοιτάσματα	κοίτασμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	16	obl	_	_
19	πετρελαίου	πετρέλαιο	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


