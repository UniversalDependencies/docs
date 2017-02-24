

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is a language-specific subtype of [aux]().

6 nodes (0%) are attached to their parents as `aux:pass`.

6 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 3 pairs of parts of speech are connected with `aux:pass`: [uk-pos/ADJ]()-[uk-pos/AUX]() (4; 67% instances), [uk-pos/NOUN]()-[uk-pos/AUX]() (1; 17% instances), [uk-pos/VERB]()-[uk-pos/AUX]() (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	У	у	ADP	Spsl	Case=Loc	2	case	_	_
2	місті	місто	NOUN	Ncnsln	Animacy=Inan|Case=Loc|Gender=Neut	4	obl	_	_
3	був	бути	AUX	Vapis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	оголошений	оголошений	ADJ	Ap-msnf-ep	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	0	root	_	_
5	надзвичайний	надзвичайний	ADJ	Ao-msnf	Case=Nom|Gender=Masc	6	amod	_	_
6	стан	стан	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	4	nsubj:pass	_	SpaceAfter=No
7	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 35 aux:pass	color:blue
1	У	у	ADP	Spsl	Case=Loc	2	case	_	_
2	разі	раз	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc	25	obl	_	_
3	відмови	відмова	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	2	nmod	_	_
4	особи	особа	NOUN	Ncfsgy	Animacy=Anim|Case=Gen|Gender=Fem	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	U	_	10	punct	_	_
6	у	у	ADP	Spsg	Case=Gen	7	case	_	_
7	якої	який	DET	Pr--f-sga	Case=Gen|Gender=Fem|PronType=Rel	10	obl	_	_
8	безпритульна	безпритульний	ADJ	Ao-fsns	Case=Nom|Gender=Fem	9	amod	_	_
9	тварина	тварина	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	10	nsubj	_	_
10	була	бути	VERB	Vapis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	4	acl	_	_
11	на	на	ADP	Spsl	Case=Loc	12	case	_	_
12	утриманні	утримання	NOUN	Ncnsln	Animacy=Inan|Case=Loc|Gender=Neut	10	obl	_	_
13	та	та	CCONJ	Ccs	_	15	cc	_	_
14	в	в	ADP	Spsl	Case=Loc	15	case	_	_
15	користуванні	користування	NOUN	Ncnsln	Animacy=Inan|Case=Loc|Gender=Neut	12	conj	_	SpaceAfter=No
16	,	,	PUNCT	U	_	10	punct	_	_
17	від	від	ADP	Spsg	Case=Gen	18	case	_	_
18	набуття	набуття	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut	3	nmod	_	_
19	права	право	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut	18	nmod	_	_
20	власності	власність	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	19	nmod	_	_
21	на	на	ADP	Spsa	Case=Acc	22	case	_	_
22	неї	вона	PRON	Pp-3f-san	Case=Acc|Gender=Fem|Person=3|PrepCase=Pre|PronType=Prs	20	nmod	_	_
23	ця	цей	DET	Pd--f-sna	Case=Nom|Gender=Fem|PronType=Dem	24	det	_	_
24	тварина	тварина	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	25	nsubj	_	_
25	переходить	переходити	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
26	у	у	ADP	Spsa	Case=Acc	27	case	_	_
27	власність	власність	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	25	obl	_	_
28	територіальної	територіальний	ADJ	Ao-fsgf	Case=Gen|Gender=Fem	29	amod	_	_
29	громади	громада	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	27	nmod	_	SpaceAfter=No
30	,	,	PUNCT	U	_	36	punct	_	_
31	на	на	ADP	Spsl	Case=Loc	32	case	_	_
32	території	територія	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	36	obl	_	_
33	якої	який	DET	Pr--f-sga	Case=Gen|Gender=Fem|PronType=Rel	36	obl	_	_
34	її	вона	PRON	Pp-3f-san	Case=Acc|Gender=Fem|Person=3|PronType=Prs	36	obj	_	_
35	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	36	aux:pass	_	_
36	виявлено	виявити	VERB	Vmeo	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	29	acl	_	SpaceAfter=No
37	.	.	PUNCT	U	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Раптом	раптом	ADV	R	_	4	advmod	_	_
2	ці	цей	AUX	Pd---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	3	aux:pass	_	_
3	звуки	звук	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
4	перериває	переривати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	вступний	вступний	ADJ	Ao-msnf	Case=Nom|Gender=Masc	6	amod	_	_
6	брязкіт	брязкіт	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	4	nsubj	_	_
7	литаври	литавра	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	U	_	11	punct	_	_
9	що	що	SCONJ	Css	_	13	mark	_	SpaceAfter=No
10	,	,	PUNCT	U	_	11	punct	_	_
11	завмираючи	завмираючи	VERB	Vmpgp	Aspect=Imp|Tense=Pres|VerbForm=Conv	13	advcl	_	SpaceAfter=No
12	,	,	PUNCT	U	_	11	punct	_	_
13	подає	подавати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl	_	_
14	голос	голос	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	13	obj	_	_
15	од	од	ADP	Spsg	Case=Gen	16	case	_	_
16	натискування	натискування	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut	13	obl	_	_
17	ноги	нога	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	16	nmod	_	SpaceAfter=No
18	.	.	PUNCT	U	_	4	punct	_	_

~~~


