---
layout: base
title:  'Sandbox'
---

# Sandbox

This file is intended as a "sandbox" for trying out the editing
features. Feel free to make changes by clicking the "edit page" link
at the top. (You need to be a project member and logged in to GitHub
for this to work.)

(Please note: this page is public and shared with others, and its
contents will be regularly reset. Don't store anything you want to
keep here.)

----------

# Some markdown

* bulleted
* list

1. numbered
2. list

Link: [link text](http://www.example.com)

# header 1

## header 2

### header 3

#### header 4

*italics* and **bold**

`inline code`

----------

# Some visualizations

~~~ sdparse
Just some tokens
~~~

~~~ sdparse
Tokens/Noun with/Adpos POS/Noun
~~~

~~~ sdparse
A dependency
det(dependency, A)
~~~

<div class="sd-parse">
Alternative syntax
</div>

<div class="sd-parse" tabs="yes">
Dynamic visualization (click "edit!")
</div>

~~~ sdparse
Example with error
det(no-such, token)
~~~

----------

## CoNLL-U example

<div class="conllu-parse" tabs="yes">
1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2-3   haven't   _        _       _        _                  _      _ _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
3     not       not      ADV     RB       _                  2      neg _ _
4     a         a        DET     DT       _                  5      det _ _
5     clue      clue     NOUN    NN       Num=Sing           2      dobj _ _
6     .         .        PUNCT   .        _                  2      punct _ _
</div>

What about secondary dependencies in the enhanced representation?

<div class="conllu-parse" tabs="yes">
1    She       _   PRON    _   _   2   nsubj   _ _
2    declared  _   VERB    _   _   0   root    _ _
3    the       _   DET     _   _   4   det     _ _
4    cake      _   NOUN    _   _   2   dobj    5:nsubj _
5    beautiful _   ADJ     _   _   2   xcomp   _ _
6    .         _   PUNCT   _   _   2   punct   _ _
</div>

Two sentences can be used to show the English translation of a foreign example:

<pre><code class="language-conllu"># give the toys to the children
1 donner donner VERB _ VerbForm=Inf 0 root _ give
2 les le DET _ Definite=Def|Number=Plur 3 det _ the
3 jouets jouet NOUN _ Gender=Masc|Number=Plur 1 dobj _ toys
4-5 aux _ _ _ _ _ _ _ _
4 à à ADP _ _ 6 case _ to
5 les le DET _ Definite=Def|Number=Plur 6 det _ the
6 enfants enfant NOUN _ Gender=Masc|Number=Plur 1 nmod _ children

# now the parallel English tree
1 give donner VERB _ VerbForm=Inf 0 root _ give
2 the le DET _ Definite=Def|Number=Plur 3 det _ the
3 toys jouet NOUN _ Gender=Masc|Number=Plur 1 dobj _ toys
4 to à ADP _ _ 6 case _ to
5 the le DET _ Definite=Def|Number=Plur 6 det _ the
6 children enfant NOUN _ Gender=Masc|Number=Plur 1 nmod _ children
</code></pre>

Simplified syntax + sentence label

~~~ conllu
# sentence-label long-label
1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
~~~

<a name="hebrew" />

## Right-to-left text (Hebrew)

~~~ sdparse
Aדני/NOUN Aראה/VERB Aסרט/NOUN
nsubj(Aראה, Aדני)
dobj(Aראה, Aסרט)
~~~

Same without "A" (should trigger auto-insertion of "ˑ")

~~~ sdparse
דני/NOUN ראה/VERB סרט/NOUN
nsubj(ראה, דני)
dobj(ראה, סרט)
~~~

Same sentence in CoNLL-U:

~~~ conllu
1     ˑדניˑ       _        NOUN    _      _     2      nsubj _ _
2     ˑראהˑ       _        VERB    _      _     0      root  _ _
3     ˑסרטˑ       _        NOUN    _      _     2      dobj  _ _
~~~

Without literal "ˑ" in input  (should trigger auto-insertion)

~~~ conllu
1     דני       _        NOUN    _      _     2      nsubj _ _
2     ראה       _        VERB    _      _     0      root  _ _
3     סרט       _        NOUN    _      _     2      dobj  _ _
~~~

Does Arabic work as well?

~~~ conllu
1     ˑوَˑ       _        NOUN    _      _     2      nsubj _ _
2     ˑلاحَظَˑ       _        VERB    _      _     0      root  _ _
3     ˑالتَقْرِيرُˑ       _        NOUN    _      _     2      dobj  _ _
~~~

Without literal "ˑ" in input  (should trigger auto-insertion)

~~~ conllu
1     وَ       _        NOUN    _      _     2      nsubj _ _
2     لاحَظَ       _        VERB    _      _     0      root  _ _
3     التَقْرِيرُ       _        NOUN    _      _     2      dobj  _ _
~~~

~~~ conllu
1     ‎דני       _        NOUN    _      _     2      nsubj _ _
2     ‎ראה       _        VERB    _      _     0      root  _ _
3     ‎סרט       _        NOUN    _      _     2      dobj  _ _
~~~
----------

# Some Jekyll 

## Finnish documentation for relations containing "cop" 

{% for p in site.fi-dep %}
{% if p.title contains "cop" %}
{{ p.content }}
{% endif %}
{% endfor %}

## Finnish documentation for relations with tag "case"

{% for p in site.fi-dep %}
{% if p.tags contains "case" %}
{{ p.content }}
{% endif %}
{% endfor %}

----------

### Irish example
~~~ conllu
1	Eisean	eisean	PRON	PRON	_	0	ROOT	_	_
2	a	a	PART	PART	_	3	mark:prt	_	_
3	thug	tabhair	VERB	VERB	_	1	nsubj	_	_
4	chuig	chuig	ADP	ADP	_	3	case	_	_
5	an	an	DET	DET	_	6	det	_	_
6	mbád	bád	NOUN	NOUN	_	4	nmod	_	_
7	mé	mé	PRON	PRON	_	3	dobj	_	_
8	arú	arú	ADV	ADV	_	9	advmod	_	_
9	aréir	aréir	ADV	ADV	_	3	advmod	_	_
10	.	.	PUNCT	PUNCT	_	1	punct	_	_
~~~

---------

### German
~~~ sdparse
Alles hat ein Ende, nur die Wurst hat zwei .
nsubj(hat,Alles)
dobj(hat,Ende)
det(Ende,ein)
nsubj(hat,Wurst)
dobj(hat,zwei)
det(Wurst,die)
advmod(hat,nur)
parataxis(hat,hat)
~~~

### Argument structure

#### Extraneous prepositions 
We annotate all nominal dependents introduced by extraneous prepositions as nominal 
modifiers. In the following sentence, *him* is marked as a nominal modifier `nmod` 
instead of an indirect object `iobj` of *give*.

~~~ conllu
# visual-style 6 4 nmod	color:red
1	I	_	PRON	PRP	_	2	nsubj	_	_
2	had	_	VERB	VBD	_	0	root	_	_
3	to	_	PART	TO	_	4	mark	_	_
4	give	_	VERB	VB	_	2	xcomp	_	_
5	to	_	ADP	IN	_	6	case	_	_
6	him	_	PRON	PRP	_	4	nmod	_	_
7	water	_	NOUN	NN	_	4	dobj	_	_

~~~

#### Omitted prepositions
We treat nominal dependents of a predicate that are lacking a preposition as arguments 
rather than nominal modifiers. In the example below, *money* is marked as `dobj` instead 
of `nmod` of *ask*. As *you* functions in this context as a second argument of *ask*, it 
is annotated as `iobj` instead of `dobj`.

~~~ conllu
# visual-style 5 4 iobj	color:red
# visual-style 7 4 dobj	color:red
1	I	_	PRON	PRP	_	2	nsubj	_	_
2	have	_	VERB	VBP	_	0	root	_	_
3	to	_	PART	TO	_	4	mark	_	_
4	ask	_	VERB	VB	_	2	xcomp	_	_
5	you	_	PRON	PRP	_	4	iobj	_	_
6	the	_	DET	DT	_	7	det	_	_
7	money	_	NOUN	NN	_	4	dobj	_	_
8	of	_	ADP	IN	_	10	case	_	_
9	the	_	DET	DT	_	10	det	_	_
10	tickets	_	NOUN	NNS	_	7	nmod	_	_
11	back	_	ADV	RB	_	4	advmod	_	_

~~~

### Tense

Cases of erroneous tense usage are annotated according to the morphological tense of the verb. 
For example, below we annotate *shopping* with present participle `VBG`.

~~~ conllu
# visual-style 6 bgColor:red
# visual-style 6 fgColor:white
1	Another	_	DT	DT	_	2	det	_	_
2	thing	_	NN	NN	_	3	nsubj	_	_
3	is	_	VBZ	VBZ	_	0	root	_	_
4	when	_	WRB	WRB	_	6	advmod	_	_
5	you	_	PRP	PRP	_	6	nsubj	_	_
6	shopping	_	VBG	VBG	_	3	ccomp	_	_
7	in	_	IN	IN	_	10	case	_	_
8	a	_	DT	DT	_	10	det	_	_
9	busy	_	JJ	JJ	_	10	amod	_	_
10	street	_	NN	NN	_	6	nmod	_	_

~~~

We use the base form VB over VBP for cases of erroneous tense in auxiliary constructions.

~~~ conllu
# visual-style 4 bgColor:red
# visual-style 4 fgColor:white
1	how	_	WRB	WRB	_	4	advmod	_	_
2	has	_	VBZ	VBZ	_	4	aux	_	_
3	it	_	PRP	PRP	_	4	nsubj	_	_
4	change	_	VB	VB	_	0	root	_	_
5	my	_	PRP$	PRP$	_	7	det	_	_
6	daily	_	JJ	JJ	_	7	amod	_	_
7	life	_	NN	NN	_	4	dobj	_	_
8	?	_	.	.	_	4	punct	_	_

~~~

### Word Formation

Erroneous word formations that are contextually plausible and can be assigned with an
existing PTB tag are annotated literally. In the following example, *stuffs* is
handled as a plural count noun.

~~~ conllu
# visual-style 9 bgColor:red
# visual-style 9 fgColor:white
1	I	_	PRP	PRP	_	2	nsubj	_	_
2	believe	_	VBP	VBP	_	0	root	_	_
3	we	_	PRP	PRP	_	9	nsubj	_	_
4	'll	_	MD	MD	_	9	aux	_	_
5	be	_	VB	VB	_	9	cop	_	_
6	more	_	RBR	RBR	_	9	advmod	_	_
7	into	_	IN	IN	_	9	case	_	_
8	fashionable	_	JJ	JJ	_	9	amod	_	_
9	stuffs	_	NNS	NNS	_	2	ccomp	_	_

~~~
 
Similarely, in the example below we annotate *necessaryiest* as a superlative.

~~~ conllu
# visual-style 2 bgColor:red
# visual-style 2 fgColor:white
1	the	_	DT	DT	_	3	det	_	_
2	necessaryiest	_	JJS	JJS	_	3	amod	_	_
3	things	_	NNS	NNS	_	0	root	_	_

~~~

### Exceptions to literal annotation

Although our general annotation strategy for ESL follows literal sentence readings,
several types of word formation errors make such readings uninformative or impossible, 
essentially forcing certain words to be annotated using some degree of interpretation. 
We hence annotate the following cases according to an interpretation of an intended 
word meaning, obtained from the FCE error corrections.

#### Spelling 

Spelling errors are annotated according to the correctly spelled 
version of the word. To support error analysis of automatic annotation tools, 
misspelled words that happen to form valid words are annotated in a metadata field 
called TYPO for universal and PTB POS tags with respect to the most common usage of 
the misspelled word form. In the example below, the TYPO field contains the 
typical POS annotation of *where*, which is clearly unintended in the context of 
the sentence. 

~~~ conllu
# visual-style 2 bgColor:red
# visual-style 2 fgColor:white
1	We	_	PRP	PRP	_	3	nsubjpass	_	_
2	where	_	VBD	VBD	_	3	auxpass	_	_
3	invited	_	VBN	VBN	_	0	root	_	_
4	to	_	TO	TO	_	5	mark	_	_
5	visit	_	VB	VB	_	3	xcomp	_	_

~~~

#### Word Formation

Erroneous word formations that cannot be assigned with an
existing PTB tag are annotated with respect to the correct word form.

~~~ conllu
# visual-style 6 bgColor:red
# visual-style 6 fgColor:white
1	That	_	DT	DT	_	2	nsubj	_	_
2	's	_	VBZ	VBZ	_	0	root	_	_
3	why	_	WRB	WRB	_	6	advmod	_	_
4	I	_	PRP	PRP	_	6	nsubj	_	_
5	am	_	VBP	VBP	_	6	aux	_	_
6	writting	_	VBG	VBG	_	2	ccomp	_	_

~~~

In particular, ill formed adjectives that have a plural suffix reveice a standard 
adjectival POS tag. Such cases are also marked for erronuous agreement in the error 
annotation of the sentence.

~~~ conllu
# visual-style 6 bgColor:red
# visual-style 6 fgColor:white
1	interestings	_	JJ	JJ	_	2	amod	_	_
2	things	_	NNS	NNS	_	0	root	_	_

~~~

Wrong word formations that result in a valid, but contextually implausible word form 
are also annotated according to the word correction. In the example below, the nominal 
form *sale* is likely to be an unintended result of an ill formed verb. Similarly to 
spelling errors that result in valid words, we mark the typical literal POS annotation 
in the TYPO metadata field.

~~~ conllu
# visual-style 4 bgColor:red
# visual-style 4 fgColor:white
1	They	_	PRP	PRP	_	4	nsubj	_	_
2	do	_	VBP	VBP	_	4	aux	_	_
3	not	_	RB	RB	_	4	neg	_	_
4	sale	_	VB	VB	_	0	root	_	_
5	them	_	PRP	PRP	_	4	dobj	_	_

~~~
