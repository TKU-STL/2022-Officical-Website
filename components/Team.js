import { Popover, Grid, Text, Button } from "@nextui-org/react";
import styles from "../styles/Home.module.css";

export default function Team() {
    return (
        <div className={styles.teamsBackground}>
            <Text h1>Our Teams</Text>
            <Grid.Container justify="center" gap={8}>
                <Grid>
                    <Popover>
                        <Popover.Trigger>
                            <Button auto flat>Design</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Text css={{ p: "$10" }}>
                                Design is responsible runing flight simulation and design the rocket systems.
                            </Text>
                        </Popover.Content>
                    </Popover>
                </Grid>
                <Grid>
                    <Popover>
                        <Popover.Trigger>
                            <Button auto flat>Structure</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Text css={{ p: "$10" }}>
                                Design is responsible runing flight simulation and design the rocket systems.
                            </Text>
                        </Popover.Content>
                    </Popover>
                </Grid>
                <Grid>
                    <Popover>
                        <Popover.Trigger>
                            <Button auto flat>Avionics</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Text css={{ p: "$10" }}>
                                Design is responsible runing flight simulation and design the rocket systems.
                            </Text>
                        </Popover.Content>
                    </Popover>
                </Grid>
                <Grid>
                    <Popover>
                        <Popover.Trigger>
                            <Button auto flat>Propulsion</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Text css={{ p: "$10" }}>
                                Design is responsible runing flight simulation and design the rocket systems.
                            </Text>
                        </Popover.Content>
                    </Popover>
                </Grid>
            </Grid.Container>
        </div>
    );
}