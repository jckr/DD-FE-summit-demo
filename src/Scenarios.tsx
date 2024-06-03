import { useState } from 'react';
import { Action } from './Action';

type Scenario = {
    title: string,
    sections: Array<
        {
            description: string,
            tasks: Array<{
                layer1?: React.CSSProperties,
                layer2?: React.CSSProperties,
                layer3?: React.CSSProperties,
                layer4?: React.CSSProperties,
                layer5?: React.CSSProperties,
                container?: React.CSSProperties,
                intermediary?: React.CSSProperties,
                label: string
            }>
        }
    >
}

export const Scenarios = (props: {
    setStyle: (style: React.CSSProperties) => void,
    setStyle1: (style: React.CSSProperties) => void,
    setStyle2: (style: React.CSSProperties) => void,
    setStyle3: (style: React.CSSProperties) => void,
    setStyle4: (style: React.CSSProperties) => void,
    setStyle5: (style: React.CSSProperties) => void,
    setStyleIntermediary: (style: React.CSSProperties) => void,
}) => {
    const [activeScenario, setActiveScenario] = useState(0);

    const sections: Scenario[] = [
        {
            title: 'Change everything',
            sections: [
                {
                    description: 'All the layers, all the pixels, everything',
                    tasks: [
                        {
                            container: { filter: 'blur(2px)' },
                            label: 'blur a little'
                        },
                        {
                            container: { filter: 'blur(20px)' },
                            label: 'blur a lot'
                        },
                        {
                            container: { filter: 'saturate(5)' },
                            label: 'saturate'
                        },
                        {
                            container: { filter: 'saturate(0.25)' },
                            label: 'de-saturate'
                        },
                        {
                            container: { filter: 'grayscale(1)' },
                            label: 'grayscale'
                        },
                        {
                            container: { filter: 'sepia' },
                            label: 'sepia'
                        },
                        {
                            container: { filter: 'hue-rotate(45deg)' },
                            label: 'change hue'
                        },
                        {
                            container: { filter: 'hue-rotate(225deg)' },
                            label: 'change hue more'
                        }
                    ]
                },
                {
                    description: 'Same thing, but just for layer 2',
                    tasks: [
                        {
                            layer2: { filter: 'blur(2px)' },
                            label: 'blur a little'
                        },
                        {
                            layer2: { filter: 'blur(20px)' },
                            label: 'blur a lot'
                        },
                        {
                            layer2: { filter: 'saturate(5)' },
                            label: 'saturate'
                        },
                        {
                            layer2: { filter: 'saturate(0.25)' },
                            label: 'de-saturate'
                        },
                        {
                            layer2: { filter: 'grayscale(1)' },
                            label: 'grayscale'
                        },
                        {
                            layer2: { filter: 'sepia' },
                            label: 'sepia'
                        },
                        {
                            layer2: { filter: 'hue-rotate(45deg)' },
                            label: 'change hue'
                        },
                        {
                            layer2: { filter: 'hue-rotate(225deg)' },
                            label: 'change hue more'
                        }
                    ]
                },
            ]
        },
        {
            title: `What's under a layer`,
            sections: [
                {
                    description: 'This will affect all the pixels under layer #3 (so #1 and #2)',
                    tasks: [
                        {
                            label: 'grayscale',
                            layer3: {backdropFilter: 'grayscale(1)'}
                        },
                        {
                            label: 'high contrast',
                            layer3: { backdropFilter: 'contrast(2)' }   
                        },
                        {
                            label: 'low contrast',
                            layer3: { backdropFilter: 'contrast(0.5)' }   
                        },
                        {
                            label: 'invert',
                            layer3: { backdropFilter: 'invert(100%)' }   
                        }
                    ]

                }
            ]
        },
        {
            title: 'Intersection of layers',
            sections: [
                {
                    description: `I want an effect that will only affect the intersection of layer 4 with what's beneath. JUST what's under the non-transparent pixels.`,
                    tasks: [
                        {
                            label: 'hue',
                            layer4: {mixBlendMode: 'hue'}
                        },
                        {
                            label: 'saturation',
                            layer4: {mixBlendMode: 'saturation'}
                        },
                        {
                            label: 'luminosity',
                            layer4: {mixBlendMode: 'luminosity'}
                        },
                        {
                            label: 'darken',
                            layer4: {mixBlendMode: 'darken'}
                        },
                    ]
                },
                {
                    description: `Same, but I want to -ONLY- affect layer 3. layer 1 and 2 should be unchanged`,
                    tasks: [
                        {
                            label: 'hue',
                            intermediary: {isolation: 'isolate'},
                            layer4: {mixBlendMode: 'hue'}
                        },
                        {
                            label: 'saturation',
                            intermediary: {isolation: 'isolate'},
                            layer4: {mixBlendMode: 'saturation'}
                        },
                        {
                            label: 'luminosity',
                            intermediary: {isolation: 'isolate'},
                            layer4: {mixBlendMode: 'luminosity'}
                        },
                        {
                            label: 'darken',
                            intermediary: {isolation: 'isolate'},
                            layer4: {mixBlendMode: 'darken'}
                        },
                    ]
                }
            ]
        },
        {title: 'Region of a layer',
    sections: [
        {
            description: 'Using a combination of masks and backdrops, we can apply effects to parts of an image. But this affects all layers - no choosing',
            tasks: [
                {
                    label: 'outer bounds',
                    layer5: {
                        maskImage: 'linear-gradient(to right, black 0, black 25%, transparent 25%, transparent 75%, black 75%)',
                        backdropFilter: 'grayscale(1)'

                    }
                },
                {
                    label: 'circle',
                    layer5: {
                        maskImage: 'radial-gradient(circle at 75% 60%, black 10%, transparent 91%)',
                        backdropFilter: 'grayscale(1)'
                    }
                },
                {
                    label: 'polka dots',
                    layer5: {
                        maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                        maskRepeat: 'repeat',
                        maskSize: '50px 50px',
                        backdropFilter: 'hue-rotate(180deg)'
                    }
                }

            ]
        }
    ]}
    ];
    return (<div className="column scenarios">
        {sections.map((s, i) => <Section scenario={s} id={i} key={`s-${i}`} activeScenario={activeScenario} setActiveScenario={setActiveScenario}
        {...props}
        />)}
        </div>);
}

const Section = (props: {
    id: number,
    scenario: Scenario,
    activeScenario: number,
    setActiveScenario: (id: number) => void,
    setStyle: (style: React.CSSProperties) => void,
    setStyle1: (style: React.CSSProperties) => void,
    setStyle2: (style: React.CSSProperties) => void,
    setStyle3: (style: React.CSSProperties) => void,
    setStyle4: (style: React.CSSProperties) => void,
    setStyle5: (style: React.CSSProperties) => void,
    setStyleIntermediary: (style: React.CSSProperties) => void,
}) => {
    const {
        id, scenario, activeScenario, setActiveScenario, setStyle, setStyle1, setStyle2, setStyle3, setStyle4, setStyle5, setStyleIntermediary
    } = props;
    return <div className={`scenario ${id === activeScenario ? 'active' : ''}`}
        onClick={() => setActiveScenario(id)}>
        <h3>{scenario.title}</h3>
        {scenario.sections.map((d, i) => {
            return <div key={`s-${i}`}>
                <div>{d.description}</div>
                <div>{[...d.tasks, {label: 'No effect'}].map((t, j) => <Action
                    key={`a-${j}`}
                    label={t.label}
                    action={() => {
                        setStyle(t.container ?? {});
                        setStyle1(t.layer1 ?? {});
                        setStyle2(t.layer2 ?? {});
                        setStyle3(t.layer3 ?? {});
                        setStyle4(t.layer4 ?? {});
                        setStyle5(t.layer5 ?? {});
                        setStyleIntermediary(t.intermediary ?? {});
                    }} />)}
                </div>
            </div>
        })}
    </div>
}
