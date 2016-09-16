

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is a language-specific subtype of [acl]().

1198 nodes (0%) are attached to their parents as `acl:relcl`.

792 instances of `acl:relcl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.41151919866444.

The following 23 pairs of parts of speech are connected with `acl:relcl`: [hi-pos/NOUN]()-[hi-pos/VERB]() (594; 50% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (350; 29% instances), [hi-pos/NOUN]()-[hi-pos/NOUN]() (57; 5% instances), [hi-pos/PROPN]()-[hi-pos/VERB]() (52; 4% instances), [hi-pos/ADV]()-[hi-pos/VERB]() (33; 3% instances), [hi-pos/NOUN]()-[hi-pos/ADJ]() (26; 2% instances), [hi-pos/PRON]()-[hi-pos/NOUN]() (26; 2% instances), [hi-pos/NOUN]()-[hi-pos/DET]() (20; 2% instances), [hi-pos/PRON]()-[hi-pos/ADJ]() (10; 1% instances), [hi-pos/PROPN]()-[hi-pos/NOUN]() (9; 1% instances), [hi-pos/ADV]()-[hi-pos/NOUN]() (3; 0% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (3; 0% instances), [hi-pos/NOUN]()-[hi-pos/PROPN]() (3; 0% instances), [hi-pos/NOUN]()-[hi-pos/NUM]() (2; 0% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/ADJ]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/NOUN]()-[hi-pos/ADV]() (1; 0% instances), [hi-pos/NUM]()-[hi-pos/NOUN]() (1; 0% instances), [hi-pos/NUM]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/NUM]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/PROPN]() (1; 0% instances), [hi-pos/PROPN]()-[hi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 acl:relcl	color:blue
1	वह	वह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=vaha
2	उस	वह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	3	det	_	ChunkId=NP2|ChunkType=child|Translit=usa
3	दिन	दिन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0_को|Tam=0|ChunkId=NP2|ChunkType=head|Translit=dina
4	को	को	ADP	PSP	AdpType=Post	3	case	_	ChunkId=NP2|ChunkType=child|Translit=ko
5	कोसते	कोस	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polite=Pol|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=kosate
6	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Pol|Tense=Pres|VerbForm=Fin	5	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
7	जब	जब	PRON	PRP	Case=Nom|PronType=Prs	11	nmod	_	ChunkId=NP3|ChunkType=head|Translit=jaba
8	यह	यह	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	9	det	_	ChunkId=NP4|ChunkType=child|Translit=yaha
9	मार्ग	मार्ग	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	dobj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=mārga
10	बंद	बंद	ADJ	JJ	_	11	compound	_	ChunkId=JJP|ChunkType=head|Translit=baṁda
11	कर	कर	VERB	VM	Number=Sing|Voice=Act	3	acl:relcl	_	Vib=0_दे+या|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=kara
12	दिया	दे	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	11	aux	_	Vib=या|Tam=yA|ChunkId=VGF2|ChunkType=child|Translit=diyā
13	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl:relcl	color:blue
1	सदन	सदन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0_में|Tam=0|ChunkId=NP|ChunkType=head|Translit=sadana
2	में	में	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=meṁ
3	जब	जब	PRON	PRP	Case=Nom|PronType=Prs	6	nmod	_	ChunkId=NP2|ChunkType=head|Translit=jaba
4	यह	यह	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	5	det	_	ChunkId=NP3|ChunkType=child|Translit=yaha
5	मामला	मामला	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=māmalā
6	उठा	उठ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	7	acl:relcl	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=uṭhā
7	तो	तो	PRON	PRP	PronType=Prs	14	nmod	_	ChunkId=NP4|ChunkType=head|Translit=to
8	उस	वह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	9	det	_	ChunkId=NP5|ChunkType=child|Translit=usa
9	समय	समय	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	14	nmod	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=samaya
10	सोनिया	सोनिया	PROPN	NNPC	Case=Nom|Gender=Fem|Number=Sing|Person=3	11	compound	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=child|Translit=soniyā
11	गांधी	गांधी	PROPN	NNP	Case=Nom|Number=Sing|Person=3	14	nsubj	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head|Translit=gāṁdhī
12	मौजूद	मौजूद	ADJ	JJ	_	14	compound	_	ChunkId=JJP|ChunkType=head|Translit=maujūda
13	नहीं	नहीं	PART	NEG	Negative=Neg|PronType=Neg	14	neg	_	ChunkId=VGF2|ChunkType=child|Translit=nahīṁ
14	थीं	था	VERB	VM	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Polite=Pol|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Vib=था|Tam=WA|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=thīṁ
15	।	।	PUNCT	SYM	_	14	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	अर्धा	अर्धा	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=ardhā
2	,	COMMA	PUNCT	SYM	_	1	punct	_	ChunkId=NP|ChunkType=child|Translit=,
3	जो	जो	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=jo
4	चौकोर	चौकोर	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	1	acl:relcl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=caukora
5	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
6	,	COMMA	PUNCT	SYM	_	5	punct	_	ChunkId=VGF|ChunkType=child|Translit=,
7	अंदर	अंदर	ADV	NST	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing|Person=3	9	advmod	_	AltTag=ADV-NOUN|Vib=0_से|ChunkId=NP4|ChunkType=head|Translit=aṁdara
8	से	से	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP4|ChunkType=child|Translit=se
9	पोली	पोला	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	ChunkId=JJP|ChunkType=head|Translit=polī
10	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=hai
11	और	और	CONJ	CC	_	9	cc	_	ChunkId=CCP|ChunkType=head|Translit=aura
12	अपेक्षाकृत	अपेक्षाकृत	ADV	RB	_	13	advmod	_	ChunkId=RBP|ChunkType=head|Translit=apekṣākr̥ta
13	नवीन	नवीन	ADJ	JJ	_	14	xcomp	_	ChunkId=JJP2|ChunkType=head|Translit=navīna
14	बनी	बन	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Part|Voice=Act	9	conj	_	Vib=या_है|Tam=yA|ChunkId=VGF3|ChunkType=head|Stype=declarative|Translit=banī
15	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	Vib=है|Tam=hE|ChunkId=VGF3|ChunkType=child|Translit=hai
16	।	।	PUNCT	SYM	_	9	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


