---
layout: base
title:  'Statistics of parataxis:insert in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

15 nodes (0%) are attached to their parents as `parataxis:insert`.

10 instances of `parataxis:insert` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.73333333333333.

The following 3 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (10; 67% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:insert	color:blue
1	sois	être	AUX	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	aux:pass	_	AlignBegin=172082|AlignEnd=172357|Reported=Yes
2	purifié	purifier	VERB	_	VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=172357|AlignEnd=173135|Gender[ctxt]=Masc|Number[ctxt]=Sing|SpaceAfter=No|Tense[denom]=Past
3	,	,	PUNCT	_	_	4	punct	_	AlignBegin=173135|AlignEnd=173604
4	entend	entendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis:insert	_	AlignBegin=173604|AlignEnd=173999|SpaceAfter=No
5	-on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	AlignBegin=173999|AlignEnd=174169
6	dans	dans	ADP	_	_	8	case	_	AlignBegin=174169|AlignEnd=174299
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	AlignBegin=174299|AlignEnd=174329|Gender[ctxt]=Masc|SpaceAfter=No
8	évangile	évangile	NOUN	_	_	4	obl:mod	_	AlignBegin=174329|AlignEnd=174914|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	AlignBegin=174914|AlignEnd=174914

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 3 parataxis:insert	color:blue
1	vraiment	vraiment	ADV	_	_	15	advmod	_	AlignBegin=222566|AlignEnd=223111|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=223111|AlignEnd=223111
3	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis:insert	_	AlignBegin=223111|AlignEnd=223251
4	Job	Job	PROPN	_	_	3	nsubj	_	AlignBegin=223251|AlignEnd=223731|Gender[lex]=Unknown|SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	AlignBegin=223731|AlignEnd=224287
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	AlignBegin=224287|AlignEnd=224422
7	vie	vie	NOUN	_	_	15	nsubj	_	AlignBegin=224422|AlignEnd=224612|Gender[lex]=Fem|Number[ctxt]=Sing
8	de	de	ADP	_	_	10	case	_	AlignBegin=224612|AlignEnd=224752
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	AlignBegin=224752|AlignEnd=224812|Gender[ctxt]=Masc|SpaceAfter=No
10	homme	homme	NOUN	_	_	7	nmod	_	AlignBegin=224812|AlignEnd=224992|Gender[lex]=Masc|Number[ctxt]=Sing
11	sur	sur	ADP	_	_	12	case	_	AlignBegin=224992|AlignEnd=225322
12	terre	terre	NOUN	_	_	10	nmod	_	AlignBegin=225322|AlignEnd=225632|Gender[lex]=Fem|Number[ctxt]=Sing
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	AlignBegin=225632|AlignEnd=225708|Reported=Yes
14	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	AlignBegin=225708|AlignEnd=225960
15	corvée	corvée	NOUN	_	_	0	root	_	AlignBegin=225960|AlignEnd=226534|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	AlignBegin=226534|AlignEnd=226534

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:insert	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	AlignBegin=14466|AlignEnd=14601
2	France	France	PROPN	_	_	4	nsubj	_	AlignBegin=14601|AlignEnd=14901|Gender[lex]=Unknown
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	AlignBegin=14901|AlignEnd=14951|Reported=Yes
4	rose	rose	ADJ	_	_	0	root	_	AlignBegin=14951|AlignEnd=15311|Gender[ctxt]=Fem|Number[ctxt]=Sing|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	AlignBegin=15311|AlignEnd=15311
6	constate	constater	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis:insert	_	AlignBegin=15311|AlignEnd=15771
7	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	AlignBegin=15771|AlignEnd=15861
8	Voix	Voix	PROPN	_	ExtPos=PROPN|Gender=Fem|Number=Sing	6	nsubj	_	AlignBegin=15861|AlignEnd=16001
9	de	de	ADP	_	_	11	case	_	AlignBegin=16001|AlignEnd=16120
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	AlignBegin=16001|AlignEnd=16120
11	Nord	Nord	PROPN	_	_	8	nmod	_	AlignBegin=16120|AlignEnd=16440|Gender[lex]=Unknown|SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	AlignBegin=16440|AlignEnd=16440

~~~


