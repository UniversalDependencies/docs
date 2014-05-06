---
layout: base
title:  'English grammatical relations'
---

## acomp : adjectival complement
An adjectival complement of a verb is an adjectival phrase which functions as the complement (like an object of the verb). 

<div class="sd-parse">
She looks very beautiful
acomp(looks, beautiful)
</div>

 
## advcl : adverbial clause modifier
An adverbial clause modifier of a VP or S is a clause modifying the verb (temporal clause, consequence, conditional clause, purpose clause, etc.). 

<div class="sd-parse">
The accident happened as the night was falling
advcl(happened, falling)
</div>



<div class="sd-parse">
If you know who did it, you should tell the teacher
advcl(tell, know)
</div>



<div class="sd-parse">
He talked to him in order to secure the account
advcl(talked, secure)
</div>

 
## advmod : adverbial modifier
An adverbial modifier of a word is a (non-clausal) adverb or adverbial phrase (ADVP) that serves to modify the meaning of the word. 

<div class="sd-parse">
Genetically modified food
advmod(modified, genetically)
</div>



<div class="sd-parse">
less often
advmod(often, less)
</div>

 
## agent : agent
An agent is the complement of a passive verb which is introduced by the preposition "by" and does the action. This relation only appears in the collapsed dependencies, where it can replace *prep\_by*, where appropriate. It does not appear in basic dependencies output. 

<div class="sd-parse">
The man has been killed by the police
agent(killed, police)
</div>



<div class="sd-parse">
Effects caused by the protein are important
agent(caused, protein)
</div>

 
## amod : adjectival modifier
An adjectival modifier of an NP is any adjectival phrase that serves to modify the meaning of the NP. 

<div class="sd-parse">
Sam eats red meat
amod(meat, red)
</div>



<div class="sd-parse">
Sam took out  a 3 million dollar loan
amod(loan, dollar)
</div>



<div class="sd-parse">
Sam took out  a \$ 3 million loan
amod(loan, \$)
</div>

 
## appos : appositional modifier
An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It includes parenthesized examples, as well as defining abbreviations in one of these structures. \hspace*{1in}   
## aux : auxiliary
An auxiliary of a clause is a non-main verb of the clause, e.g., a modal auxiliary, or a form of "be", "do" or "have" in a periphrastic tense. \hspace*{1in}  
## auxpass : passive auxiliary
A passive auxiliary of a clause is a non-main verb of the clause which contains the passive information. 

<div class="sd-parse">
Kennedy has been killed
auxpass(killed, been)
</div>



<div class="sd-parse">
Kennedy was/got killed
auxpass(killed, was/got)
</div>

 
## cc : coordination
A coordination is the relation between an element of a conjunct and the coordinating conjunction word of the conjunct.  (Note: different dependency grammars have different treatments of coordination.  We take one conjunct of a conjunction (normally the first) as the head of the conjunction.) A conjunction may also appear at the beginning of a sentence.  This is also called a cc, and dependent on the root predicate of the sentence. 

<div class="sd-parse">
And then we left.
cc(left, And)
</div>

 
## ccomp : clausal complement
A clausal complement of a verb or adjective is a dependent clause with an internal subject which functions like an object of the verb, or adjective.  Clausal complements for nouns are limited to complement clauses with a subset of nouns like "fact" or "report".  We analyze them the same (parallel to the analysis of this class as "content clauses" in Huddleston and Pullum 2002). Such clausal complements are usually finite (though there are occasional remnant English subjunctives). 

<div class="sd-parse">
He says that you like to swim
ccomp(says, like)
</div>

   
## conj : conjunct
A conjunct is the relation between two elements connected by a coordinating conjunction, such as "and", "or", etc.  We treat conjunctions asymmetrically: The head of the relation is the first conjunct and other conjunctions depend on it via the *conj* relation. 

<div class="sd-parse">
Bill is big and honest
conj(big, honest)
</div>

 
## cop : copula
A copula is the relation between the complement of a copular verb and the copular verb.  (We normally take a copula as a dependent of its complement; see the discussion in section~\ref{types}.)  
## csubj : clausal subject
A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb. In the two following examples, "what she said" is the subject. 

<div class="sd-parse">
What she said makes sense
csubj(makes, said)
</div>

 
## csubjpass : clausal passive subject
A clausal passive subject is a clausal syntactic subject of a passive clause. In the example below, "that she lied" is the subject. 

<div class="sd-parse">
That she lied was suspected by everyone
csubjpass(suspected, lied)
</div>

 
## dep : dependent
A dependency is labeled as *dep* when the system is unable to determine a more precise dependency relation between two words.  This may be because of a weird grammatical construction, a limitation in the Stanford Dependency conversion software, a parser error, or because of an unresolved long distance dependency. 

<div class="sd-parse">
Then, as if to show that he could, \ldots
dep(show, if)
</div>

 
## det : determiner
A determiner is the relation between the head of an NP and its determiner. 

<div class="sd-parse">
The man is here
det(man, the)
</div>



<div class="sd-parse">
Which book do you prefer?
det(book, which)
</div>

 
## discourse : discourse element
This is used for interjections and other discourse particles and elements (which are not clearly linked to the structure of the sentence, except in an expressive way). We generally follow the guidelines of what the Penn Treebanks count as an INTJ.  They define this to include: interjections (*oh*, *uh-huh*, *Welcome*), fillers (*um*, *ah*), and discourse markers (*well*, *like*, *actually*, but not *you know*).  
## dobj : direct object
The direct object of a VP is the noun phrase which is the (accusative) object of the verb. 

<div class="sd-parse">
She gave me a raise
dobj(gave, raise)
</div>

  
## expl : expletive
This relation captures an existential "there". The main verb of the clause is the governor. 

<div class="sd-parse">
There is a ghost in the room
expl(is, There)
</div>

 
## goeswith : goes with
This relation links two parts of a word that are separated in text that is not well edited. We follow the treebank: The GW part is the dependent and the head is in some sense the "main" part, often the second part.  
## iobj : indirect object
The indirect object of a VP is the noun phrase which is the (dative) object of the verb. 

<div class="sd-parse">
She gave me a raise
iobj(gave, me)
</div>

 
## mark : marker
A marker is the word introducing a finite clause subordinate to another clause. For a complement clause, this will typically be "that" or "whether". For an adverbial clause, the marker is typically a preposition like "while" or "although". The mark is a dependent of the subordinate clause head.   
## mwe : multi-word expression
The multi-word expression (modifier) relation is used for certain multi-word idioms that behave like a single function word.  It is used for a closed set of dependencies between words in common multi-word expressions for which it seems difficult or unclear to assign any other relationships.  At present, this relation is used inside the following expressions: *rather than, as well as, instead of, such as, because of, instead of, in addition to, all but, such as, because of, instead of, due to*.  The boundaries of this class are unclear; it could grow or shrink a little over time. 

<div class="sd-parse">
I like dogs as well as cats
mwe(well, as)
</div>



<div class="sd-parse">
He cried because of you
mwe(of, because)
</div>

 
## neg : negation modifier
The negation modifier is the relation between a negation word and the word it modifies. 

<div class="sd-parse">
Bill is not a scientist
neg(scientist, not)
</div>



<div class="sd-parse">
Bill doesn't drive
neg(drive, n't)
</div>

 
## nn : noun compound modifier
A noun compound modifier of an NP is any noun that serves to modify the head noun. (Note that in the current system for dependency extraction, all nouns modify the rightmost noun of the NP -- there is no intelligent noun compound analysis.  This is likely to be fixed once the Penn Treebank represents the branching structure of NPs.) 

<div class="sd-parse">
Oil price futures
nn(futures, oil)
</div>

 
## npadvmod : noun phrase as adverbial modifier
This relation captures various places where something syntactically a noun phrase (NP) is used as an adverbial modifier in a sentence.   These usages include: (i)~a measure phrase, which is the relation between the head of an ADJP/ADVP/PP and the head of a measure phrase modifying the ADJP/ADVP; (ii)~noun phrases giving an extent inside a VP which are not objects; (iii)~financial constructions involving an adverbial or PP-like NP, notably the following construction *\$5 a share*, where the second NP means "per share"; (iv)~floating reflexives; and (v)~certain other absolutive NP constructions. A temporal modifier (tmod) is a subclass of npadvmod which is distinguished as a separate relation. 

<div class="sd-parse">
The director is 65 years old
npadvmod(old, years)
</div>



<div class="sd-parse">
6 feet long
npadvmod(long, feet)
</div>



<div class="sd-parse">
Shares eased a fraction
npadvmod(eased, fraction)
</div>



<div class="sd-parse">
IBM earned \$ 5 a share
npadvmod(\$, share)
</div>



<div class="sd-parse">
The silence is itself significant
npadvmod(significant, itself)
</div>

 
## nsubj : nominal subject
A nominal subject is a noun phrase which is the syntactic subject of a clause. The governor of this relation might not always be a verb: when the verb is a copular verb, the root of the clause is the complement of the copular verb, which can be an adjective or noun. 

<div class="sd-parse">
Clinton defeated Dole
nsubj(defeated, Clinton)
</div>

 
## nsubjpass : passive nominal subject
A passive nominal subject is a noun phrase which is the syntactic subject of a passive clause. 

<div class="sd-parse">
Dole was defeated by Clinton
nsubjpass(defeated, Dole)
</div>

 
## num : numeric modifier
A numeric modifier of a noun is any number phrase that serves to modify the meaning of the noun with a quantity. 

<div class="sd-parse">
Sam ate 3 sheep
num(sheep, 3)
</div>



<div class="sd-parse">
Sam spent forty dollars
num(dollars, 40)
</div>



<div class="sd-parse">
Sam spent \$ 40
num(\$, 40)
</div>

 
## number : element of compound number
An element of compound number is a part of a number phrase or currency amount. We regard a number as a specialized kind of multi-word expression. 

<div class="sd-parse">
I have four thousand sheep
number(thousand, four)
</div>



<div class="sd-parse">
I lost \$ 3.2 billion
number(billion, 3.2)
</div>

 
## parataxis : parataxis
The parataxis relation (from Greek for "place side by side") is a relation between the main verb of a clause and other sentential elements, such as a sentential parenthetical, a clause after a ":" or a ";", or two sentences placed side by side without any explicit coordination or subordination. 

<div class="sd-parse">
The guy, John said, left early in the morning
parataxis(left, said)
</div>



<div class="sd-parse">
Let's face it we're annoyed
parataxis(Let, annoyed)
</div>

 
## pcomp : prepositional complement
This is used when the complement of a preposition is a clause or prepositional phrase (or occasionally, an adverbial phrase). The prepositional complement of a preposition is the head of a clause following the preposition, or the preposition head of the following PP. 

<div class="sd-parse">
We have no information on whether users are at risk
pcomp(on, are)
</div>

 
## pobj : object of a preposition
The object of a preposition is the head of a noun phrase following the preposition, or the adverbs "here" and "there". (The preposition in turn may be modifying a noun, verb, etc.) Unlike the Penn Treebank, we here define cases of VBG quasi-prepositions like "including", "concerning", etc.\ as instances of *pobj*. (The preposition can be tagged a FW for "pace", "versus", etc. It can also be called a CC -- but we don't currently handle that and would need to distinguish from conjoined prepositions.) In the case of preposition stranding, the object can precede the preposition (e.g., "What does CPR stand for?"). 

<div class="sd-parse">
I sat on the chair
pobj(on, chair)
</div>

 
## poss : possession modifier
The possession modifier relation holds between the head of an NP and its possessive determiner, or a genitive 's complement. 

<div class="sd-parse">
their offices
poss(offices, their)
</div>



<div class="sd-parse">
Bill's clothes
poss(clothes, Bill)
</div>

 
## possessive : possessive modifier
The possessive modifier relation appears between the head of an NP and the genitive 's. 

<div class="sd-parse">
Bill's clothes
possessive(John, 's)
</div>

 
## preconj : preconjunct
A preconjunct is the relation between the head of an NP and a word that appears at the beginning bracketing a conjunction (and puts emphasis on it), such as "either", "both", "neither"). 

<div class="sd-parse">
Both the boys and the girls are here
preconj(boys, both)
</div>

 
## predet : predeterminer
A predeterminer is the relation between the head of an NP and a word that precedes and modifies the meaning of the NP determiner. 

<div class="sd-parse">
All the boys are here
predet(boys, all)
</div>

 
## prep : prepositional modifier
A prepositional modifier of a verb, adjective, or noun is any prepositional phrase that serves to modify the meaning of the verb, adjective, noun, or even another prepositon.  In the collapsed representation, this is used only for prepositions with NP complements. 

<div class="sd-parse">
I saw a cat in a hat
prep(cat, in)
</div>



<div class="sd-parse">
I saw a cat with a telescope
prep(saw, with)
</div>



<div class="sd-parse">
He is responsible for meals
prep(responsible, for)
</div>

 
## prepc : prepositional clausal modifier
In the collapsed representation (see section \ref{types}), a prepositional clausal modifier of a verb, adjective, or noun is a clause introduced by a preposition which  serves to modify the meaning of the verb, adjective, or noun. 

<div class="sd-parse">
He purchased it without paying a premium
prepc\_without(purchased, paying)
</div>

 
## prt : phrasal verb particle
The phrasal verb particle relation identifies a phrasal verb, and holds between the verb and its particle. 

<div class="sd-parse">
They shut down the station
prt(shut, down)
</div>

 
## punct : punctuation
This is used for any piece of punctuation in a clause, if punctuation is being retained in the typed dependencies. By default, punctuation is not retained in the output. 

<div class="sd-parse">
Go home!
punct(Go, !)
</div>

 
## quantmod : quantifier phrase modifier
A quantifier modifier is an element modifying the head of a QP constituent.  (These are modifiers in complex numeric quantifiers, not other types of "quantification".  Quantifiers like "all" become det.) 

<div class="sd-parse">
About 200 people came to the party
quantmod(200, About)
</div>

 
## rcmod : relative clause modifier
A relative clause modifier of an NP is a relative clause modifying the NP.  The relation points from the head noun of the NP to the head of the relative clause, normally a verb. 

<div class="sd-parse">
I saw the man you love
rcmod(man, love)
</div>



<div class="sd-parse">
I saw the book which you bought
rcmod(book, bought)
</div>

 
## ref : referent
A referent of the head of an NP is the relative word introducing the relative clause modifying the NP. 

<div class="sd-parse">
I saw the book which you bought
ref(book, which)
</div>

 
## rel : relative
 
## root : root
The root grammatical relation points to the root of the sentence. A fake node "ROOT" is used as the governor. The ROOT node is indexed with "0", since the indexation of real words in the sentence starts at 1. 

<div class="sd-parse">
I love French fries.
root(ROOT, love)
</div>



<div class="sd-parse">
Bill is an honest man
root(ROOT, man)
</div>

 
## tmod : temporal modifier
A temporal modifier (of a VP, NP, or an ADJP is a bare noun phrase constituent that serves to modify the meaning of the constituent by specifying a time.  (Other temporal modifiers are prepositional phrases and are introduced as prep.) 

<div class="sd-parse">
Last night, I swam in the pool
tmod(swam, night)
</div>

 
## vmod : reduced non-finite verbal modifier
A reduced non-finite verbal modifier is a participial or infinitive form of a verb heading a phrase (which may have some arguments, roughly like a VP). These are used to modify the meaning of an NP or another verb. They are not core arguments of a verb or full finite relative clauses. 

<div class="sd-parse">
Points to establish are \ldots
vmod(points, establish)
</div>



<div class="sd-parse">
I don't have anything to say to you
vmod(anything, say)
</div>



<div class="sd-parse">
Truffles picked during the spring are tasty
vmod(truffles, picked)
</div>



<div class="sd-parse">
Bill tried to shoot, demonstrating his incompetence
vmod(shoot, demonstrating)
</div>

    
## xcomp : open clausal complement
An open clausal complement (*xcomp*) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause. These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers, such as a purpose clause. The name *xcomp* is borrowed from Lexical-Functional Grammar. 

<div class="sd-parse">
He says that you like to swim
xcomp(like, swim)
</div>



<div class="sd-parse">
Sue asked George to respond to her offer
xcomp(ask, respond)
</div>



<div class="sd-parse">
I consider him a fool
xcomp(consider, fool)
</div>



<div class="sd-parse">
I consider him honest
xcomp(consider, honest)
</div>

 
## xsubj : controlling subject
A controlling subject is the relation between the head of a open clausal complement (*xcomp*) and the external subject of that clause. This is an additional dependency, not a basic depedency. 

<div class="sd-parse">
Tom likes to eat fish
xsubj(eat, Tom)
</div>

 

