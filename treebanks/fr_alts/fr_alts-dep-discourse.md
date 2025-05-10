---
layout: base
title:  'Statistics of discourse in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `discourse`

This relation is universal.

11 nodes (0%) are attached to their parents as `discourse`.

11 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.09090909090909.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-INTJ.html">INTJ</a></tt> (3; 27% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (3; 27% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 17 discourse	color:blue
1	Et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	ung	un	DET	_	Definite=Ind	3	det	_	gold_pos=DET|prpos=Di|uppos=D
3	mercredy	mercredi	NOUN	_	_	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	ladite	ledit	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	fame	femme	NOUN	_	_	6	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	passoet	passer	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
7	par	par	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
8	sa	son	DET	_	_	9	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
9	maison	maison	NOUN	_	_	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
11	dyst	dire	VERB	_	VerbForm=Fin	6	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
12	a	à	ADP	_	_	14	case	_	gold_pos=ADP|prpos=S|uppos=P
13	ladite	ledit	DET	_	Definite=Ind	14	det	_	gold_pos=DET|prpos=Di|uppos=D
14	deposante	déposant	NOUN	_	_	11	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
15	:	:	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
16	«	«	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP
17	Va	aller	VERB	_	VerbForm=Fin	22	discourse	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
18	,	,	PUNCT	_	_	17	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
19	ton	ton	DET	_	_	20	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
20	mary	mari	NOUN	_	_	22	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
21	ne	ne	ADV	_	Polarity=Neg	22	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
22	vivera	vivre	VERB	_	VerbForm=Fin	11	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
23	plus	plus	ADV	_	_	22	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
24	gueres	guère	ADV	_	_	22	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
25	!	!	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP
26	»	»	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 11 discourse	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	5	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	il	il	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	dyst	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	a	à	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	sadite	sondit	DET	_	_	8	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
8	fille	fille	NOUN	_	_	5	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
9	:	:	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
10	«	«	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
11	Ha	ah	INTJ	_	_	21	discourse	_	gold_pos=INTJ|prpos=INT|SpaceAfter=No|uppos=ITJ
12	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
13	putain	putain	NOUN	_	_	21	vocative	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
14	que	que	PRON	_	PronType=Rel	13	acl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
15	tu	tu	PRON	_	PronType=Prs	14	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
16	es	être	AUX	_	VerbForm=Fin	14	cop	_	gold_pos=AUX|prpos=Vuc|SpaceAfter=No|uppos=EJ
17	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
18	qu'	que	PRON	_	PronType=Rel	21	obj	_	gold_pos=PRON|prpos=Pr|SpaceAfter=No|uppos=WPRO
19	as	avoir	AUX	_	VerbForm=Fin	21	aux	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=AJ
20	tu	tu	PRON	_	PronType=Prs	21	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
21	faict	faire	VERB	_	VerbForm=Fin	5	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
22	de	de	ADP	_	_	24	case	_	gold_pos=ADP|prpos=S|uppos=P
23	ton	ton	DET	_	_	24	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
24	enffant	enfant	NOUN	_	_	21	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
25	?	?	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 discourse	color:blue
1	Et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aussy	aussi	ADV	_	_	3	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	ouyt	ouïr	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	come	comme	SCONJ	_	_	7	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=WH
5	ledit	ledit	DET	_	Definite=Ind	6	det	_	gold_pos=DET|prpos=Di|uppos=D
6	Bequet	Bequet	PROPN	_	Number=Plur	7	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
7	cryet	crier	VERB	_	VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	disoet	dire	VERB	_	VerbForm=Fin	7	conj	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
10	:	:	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
11	«	«	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
12	Que	que	PRON	_	PronType=Rel	15	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
13	grant	grand	ADJ	_	_	14	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
14	dyable	diable	NOUN	_	_	15	discourse	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
15	as	avoir	VERB	_	VerbForm=Fin	7	ccomp	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
16	tu	tu	PRON	_	PronType=Prs	15	nsubj	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
17	?	?	PUNCT	_	_	15	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
18	Je	je	PRON	_	PronType=Prs	19	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
19	sçavoes	savoir	VERB	_	VerbForm=Fin	15	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
20	bien	bien	ADV	_	_	19	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
21	que	que	SCONJ	_	_	23	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
22	nous	nous	PRON	_	PronType=Prs	23	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
23	seroyons	être	VERB	_	VerbForm=Fin	19	ccomp	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
24	en	en	ADP	_	_	25	case	_	gold_pos=ADP|prpos=S|uppos=P
25	cecy	ceci	PRON	_	PronType=Dem	23	obl	_	gold_pos=PRON|prpos=Pd|SpaceAfter=No|uppos=PRO
26	!	!	PUNCT	_	_	19	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
27	»	»	PUNCT	_	_	19	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
28	luy	il	PRON	_	PronType=Prs	29	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
29	disant	dire	VERB	_	_	7	advcl	_	gold_pos=VERB|prpos=Ga|SpaceAfter=No|uppos=VG
30	:	:	PUNCT	_	_	29	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
31	«	«	PUNCT	_	_	29	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
32	Et	et	CCONJ	_	_	34	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
33	qu'	que	PRON	_	PronType=Rel	34	obj	_	gold_pos=PRON|prpos=Pr|SpaceAfter=No|uppos=WPRO
34	as	avoir	VERB	_	VerbForm=Fin	29	ccomp	_	gold_pos=VERB|join=left|prpos=Vuc|uppos=AJ
35	tu	tu	PRON	_	PronType=Prs	34	nsubj	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
36	?	?	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON

~~~


