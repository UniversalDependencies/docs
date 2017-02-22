

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

2861 nodes (1%) are attached to their parents as `acl`.

2084 instances of `acl` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.66235581964348.

The following 21 pairs of parts of speech are connected with `acl`: [hi-pos/NOUN]()-[hi-pos/VERB]() (1771; 62% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (356; 12% instances), [hi-pos/VERB]()-[hi-pos/NOUN]() (250; 9% instances), [hi-pos/PROPN]()-[hi-pos/VERB]() (201; 7% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (124; 4% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (61; 2% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (35; 1% instances), [hi-pos/ADJ]()-[hi-pos/VERB]() (11; 0% instances), [hi-pos/VERB]()-[hi-pos/NUM]() (11; 0% instances), [hi-pos/VERB]()-[hi-pos/DET]() (9; 0% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (7; 0% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (4; 0% instances), [hi-pos/NOUN]()-[hi-pos/ADJ]() (4; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (4; 0% instances), [hi-pos/ADV]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/DET]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (2; 0% instances), [hi-pos/NUM]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/PROPN]()-[hi-pos/ADJ]() (2; 0% instances), [hi-pos/VERB]()-[hi-pos/X]() (2; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 acl	color:blue
1	सफेद	सफेद	ADJ	JJ	Case=Acc	2	amod	_	ChunkId=NP|ChunkType=child|Translit=sapheda
2	पत्‍थरों	पत्थर	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	4	obl	_	Vib=0_से|Tam=0|ChunkId=NP|ChunkType=head|Translit=pattharoṁ
3	से	से	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=se
4	बने	बन	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	6	acl	_	Vib=या|Tam=yA|ChunkId=VGNF|ChunkType=head|Translit=bane
5	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	6	det	_	ChunkId=NP2|ChunkType=child|Translit=isa
6	मंदिर	मंदिर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=maṁdira
7	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	6	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
8	दो	दो	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child|Translit=do
9	तल	तल	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=tala
10	हैं	है	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=haiṁ
11	।	।	PUNCT	SYM	_	9	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl	color:blue
1	लेकिन	लेकिन	CCONJ	CC	_	3	cc	_	ChunkId=CCP|ChunkType=head|Translit=lekina
2	यह	यह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=yaha
3	सही	सही	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=sahī
4	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
5	कि	कि	SCONJ	CC	_	10	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP2|ChunkType=head|Translit=ki
6	मैंने	मैं	PRON	PRP	Case=Acc,Erg|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Vib=ने|Tam=ne|ChunkId=NP2|ChunkType=head|Translit=maiṁne
7	उंगली	उंगली	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	obl	_	Vib=0_से|Tam=0|ChunkId=NP3|ChunkType=head|Translit=uṁgalī
8	से	से	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child|Translit=se
9	इशारा	इशारा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=iśārā
10	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	2	acl	_	Vib=या_था|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=kiyā
11	था	था	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	10	aux	_	Vib=था|Tam=WA|ChunkId=VGF2|ChunkType=child|Translit=thā
12	।	।	PUNCT	SYM	_	3	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 acl	color:blue
1	जबकि	जबकि	CCONJ	CC	_	12	cc	_	ChunkId=CCP|ChunkType=head|Translit=jabaki
2	ससुर	ससुर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obj	_	Vib=0_को|Tam=0|ChunkId=NP|ChunkType=head|Translit=sasura
3	को	को	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=ko
4	कोई	कोई	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	case	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=koī
5	सजा	सजा	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sajā
6	तो	तो	PART	RP	_	5	dep	_	ChunkId=NP2|ChunkType=child|Translit=to
7	दूर	दूर	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	12	advmod	_	AltTag=ADV-NOUN|ChunkId=NP3|ChunkType=head|Translit=dūra
8	उसे	वह	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	12	iobj	_	Vib=को|Tam=ko|ChunkId=NP4|ChunkType=head|Translit=use
9	'	SINGLE_QUOTE	PUNCT	SYM	_	10	punct	_	SpaceAfter=No|ChunkId=NP5|ChunkType=child|Translit='
10	आजादी	आजादी	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	12	acl	_	SpaceAfter=No|Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=ājādī
11	'	SINGLE_QUOTE	PUNCT	SYM	_	10	punct	_	ChunkId=NP5|ChunkType=child|Translit='
12	बख्श	बख्श	VERB	VM	Number=Sing|Voice=Act	0	root	_	Vib=0_दे+या|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=bakhśa
13	दी	दे	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	12	aux	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=child|Translit=dī
14	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


