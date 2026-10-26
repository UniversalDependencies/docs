---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_glcii-dep-nsubj.html">nsubj</a></tt>.

46 nodes (0%) are attached to their parents as `nsubj:pass`.

33 instances of `nsubj:pass` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76086956521739.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (28; 61% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (13; 28% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Γι	για	ADP	ADP	_	3	case	_	SpaceAfter=No
2	΄	΄	PUNCT	ADP	_	3	punct	_	_
3	αυτο	αυτος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	7	obl	_	_
4	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	άτομο	άτομο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	7	nsubj:pass	_	_
6	δεν	δεν	PART	PART	_	7	advmod	_	_
7	δύναται	δύναμαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
8	να	να	AUX	AUX	_	9	aux	_	_
9	επιλέγει	επιλέγω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	xcomp	_	_
10	ποιον	ποιος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	12	obj	_	_
11	θα	θα	AUX	AUX	_	12	aux	_	_
12	αγαπήσει	αγαπώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	9	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj:pass	color:blue
1	Τους	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obl:arg	_	_
2	φαίνεται	φαίνομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	2	nsubj:pass	_	_
4	περίεργο	περίεργος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	3	conj	_	_
7	παράνομο	παράνομος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	αμαρτία	αμαρτία	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nsubj:pass	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
2	καιρικά	καιρικός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	3	amod	_	_
3	φαινόμενα	φαινόμενο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	_
4	αλλάζουν	αλλάζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	με	με	ADP	ADP	_	7	case	_	_
6	μεγάλη	μεγάλος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	7	amod	_	_
7	ταχυτητα	ταχυτητα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	13	punct	_	_
9	οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	βροχές	βροχή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	13	nsubj	_	_
11	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	cop	_	_
12	πιο	πιο	ADV	ADV	_	13	advmod	_	_
13	έντονες	έντονος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	4	parataxis	_	_
14	και	και	CCONJ	CCONJ	_	16	cc	_	_
15	έτσι	έτσι	ADV	ADV	_	16	advmod	_	_
16	γίνονται	γίνομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	conj	_	_
17	πλυμμηρες	πλυμμηρα	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	16	nsubj:pass	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes

~~~


