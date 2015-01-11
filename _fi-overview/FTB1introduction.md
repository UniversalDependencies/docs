FTB1 introduction
=================

FinnTreeBank 1 was prepared manually in the University of Helsinki
to specify a grammatical description model.
The version to be included in the UD effort is created by
automatic scripts that relabel and restructure the annotations to
match the UD Finnish specification.

The FinnTreeBank model is broadly similar in spirit to the new model.
The main differences are that, first, FinnTreeBank uses more abstract
relations where the new model specifies different relations based on
the features of the dependent, and, second, FinnTreeBank uses chained
structures where the new model bundles, e.g., auxiliaries directly to
one head verb.

Relation labels were mostly mapped to the new model by observing
the various features of the dependent and its head. "Attributes" and
"modifiers" were conflated and then split by the type of the dependent.
The current mapping is not as fine-grained as the new specification.
Some cases are still mapped to the catchall relation "dep".

Auxiliary chains were undone by lifting the dependents of auxiliaries,
including copulas, to their head. This also includes the "modal" words
in FinnTreeBank, which are certain nominals within verb chains.
A similar lifting was done in conjunct chains, so that a conj of
a conj became a conj of its head.

There is a prominent difference in tokenization: many function words
may be fused with the negative verb to become one surface word, and
these are segmented as two tokens in FinnTreeBank, both originally and
in the UD version. This seems compatible with the goals of the
universal model. [Possibly clitic particles should be split, too, but
neither FinnTreeBank nor the current UD Finnish model does that. It
might be a challenge for tool chains.]

Punctuation is not handled properly in FinnTreeBank. Most punctuation
marks are simply linked automatically to a nearby token.
