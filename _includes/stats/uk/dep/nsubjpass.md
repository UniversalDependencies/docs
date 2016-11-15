

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

12 nodes (1%) are attached to their parents as `nsubjpass`.

10 instances of `nsubjpass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 7 pairs of parts of speech are connected with `nsubjpass`: [uk-pos/ADJ]()-[uk-pos/NOUN]() (3; 25% instances), [uk-pos/ADJ]()-[uk-pos/PRON]() (2; 17% instances), [uk-pos/ADJ]()-[uk-pos/PROPN]() (2; 17% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (2; 17% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (1; 8% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (1; 8% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubjpass	color:blue
1	Село	село	NOUN	noun:inanim:n:v_naz	Animacy=Inan|Case=Nom|Gender=Neut	4	nsubjpass	_	_
2	Крушельниця	Крушельниця	PROPN	noun:inanim:f:v_naz:prop	Animacy=Inan|Case=Nom|Gender=Fem	1	appos	_	_
3	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	розташоване	розташований	ADJ	adj:n:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Neut|VerbForm=Part|Voice=Pass	0	root	_	_
5	над	над	ADP	prep:rv_oru	Case=Ins	6	case	_	_
6	річкою	річка	NOUN	noun:inanim:f:v_oru	Animacy=Inan|Case=Ins|Gender=Fem	4	nmod	_	_
7	Стрий	Стрий	PROPN	noun:inanim:m:v_naz:prop:xp2	Animacy=Inan|Case=Nom|Gender=Masc	6	appos	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubjpass	color:blue
1	Те	те	PRON	noun:inanim:n:v_zna:&pron:dem	Animacy=Inan|Case=Acc|Gender=Neut|PronType=Dem	8	nsubjpass	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	що	що	SCONJ	conj:subord	_	5	mark	_	_
4	вона	вона	PRON	noun:f:v_naz:&pron:pers:3	Case=Nom|Gender=Fem|Person=3|PronType=Prs	5	nsubj	_	_
5	обманювала	обманювати	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	1	acl	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	1	punct	_	_
7	було	бути	VERB	verb:imperf:past:n	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	8	auxpass	_	_
8	зауважене	зауважений	ADJ	adj:n:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Neut|VerbForm=Part|Voice=Pass	0	root	_	_
9	багатьма	багато	NUM	numr:p:v_oru:&pron:ind	Case=Ins|Number=Plur|NumType=Card|PronType=Ind	8	iobj	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	3	nsubjpass	_	_
2	було	бути	VERB	verb:imperf:past:n	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	вирішено	вирішити	VERB	verb:perf:impers	Aspect=Perf|VerbForm=Imps	0	root	_	_
4	позавчора	позавчора	ADV	adv	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	3	punct	_	_

~~~


