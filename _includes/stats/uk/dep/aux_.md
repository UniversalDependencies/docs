

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

25 nodes (0%) are attached to their parents as `aux`.

16 instances of `aux` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32.

The following 3 pairs of parts of speech are connected with `aux`: [uk-pos/VERB]()-[uk-pos/AUX]() (21; 84% instances), [uk-pos/AUX]()-[uk-pos/AUX]() (3; 12% instances), [uk-pos/ADJ]()-[uk-pos/AUX]() (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Можна	можна	ADV	R	_	3	advmod	_	_
2	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	3	aux	_	_
3	побачити	побачити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	0	root	_	_
4	ту	той	DET	Pd--f-saa	Case=Acc|Gender=Fem|PronType=Dem	6	det	_	_
5	саму	самий	DET	Px--f-saa	Case=Acc|Gender=Fem|PronType=Prs|Reflex=Yes	6	amod	_	_
6	стелю	стеля	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	3	obj	_	_
7	і	і	CCONJ	Ccs	_	10	cc	_	_
8	зовсім	зовсім	ADV	R	_	9	advmod	_	_
9	іншу	інший	DET	Pi--f-saa	Case=Acc|Gender=Fem|PronType=Ind	10	det	_	_
10	лампу	лампа	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	U	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Можна	можна	ADV	R	_	4	advmod	_	_
2	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	1	cop	_	_
3	б	б	AUX	Q	_	2	aux	_	_
4	порівняти	порівняти	VERB	Vmen	Aspect=Perf|VerbForm=Inf	0	root	_	_
5	з	з	ADP	Spsi	Case=Ins	6	case	_	_
6	повістю	повість	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem	4	obl	_	_
7	Михайла	Михайло	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv	6	nmod	_	_
8	Коцюбинського	Коцюбинський	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur	7	flat:name	_	_
9	«	«	PUNCT	U	_	10	punct	_	SpaceAfter=No
10	Тіні	тінь	NOUN	Ncfpnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	appos	_	_
11	забутих	забутий	ADJ	Ap--pgf-ep	Aspect=Perf|Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	12	amod	_	_
12	предків	предок	NOUN	Ncmpgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
13	»	»	PUNCT	U	_	10	punct	_	_
14	—	—	PUNCT	U	_	19	punct	_	_
15	з	з	ADP	Spsi	Case=Ins	19	case	_	_
16	її	її	DET	Ppp3n-sia	Case=Ins|Gender=Neut|Person=3|Poss=Yes|PronType=Prs	19	det	_	_
17	сильним	сильний	ADJ	Afpnsif	Case=Ins|Degree=Pos|Gender=Neut	19	amod	_	_
18	гуцульським	гуцульський	ADJ	Ao-nsif	Case=Ins|Gender=Neut	19	amod	_	_
19	забарвленням	забарвлення	NOUN	Ncnsin	Animacy=Inan|Case=Ins|Gender=Neut	6	nmod	_	SpaceAfter=No
20	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux	color:blue
1	Ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	жили	жити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	при	при	ADP	Spsl	Case=Loc	5	case	_	_
4	головній	головний	ADJ	Afpfslf	Case=Loc|Degree=Pos|Gender=Fem	5	amod	_	_
5	вулиці	вулиця	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	U	_	12	punct	_	_
7	і	і	CCONJ	Ccs	_	12	cc	_	_
8	ґірлянди	ґірлянда	NOUN	Ncfpnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	12	nsubj	_	_
9	святкових	святковий	ADJ	Afp-pgf	Case=Gen|Degree=Pos|Number=Plur	10	amod	_	_
10	ілюмінацій	ілюмінація	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	8	nmod	_	_
11	були	бути	AUX	Vapis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	12	aux	_	_
12	натягнуті	натягнутий	ADJ	Ap--pns-ep	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	2	conj	_	_
13	якраз	якраз	PART	Q	_	16	discourse	_	_
14	навпроти	навпроти	ADP	Spsg	Case=Gen	16	case	_	_
15	наших	наш	DET	Ppp1--pga	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	16	det	_	_
16	вікон	вікно	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	12	obl	_	SpaceAfter=No
17	.	.	PUNCT	U	_	2	punct	_	_

~~~


