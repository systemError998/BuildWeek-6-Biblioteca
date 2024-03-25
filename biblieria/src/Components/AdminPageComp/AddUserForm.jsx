import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import useAuthContext from "../../context/AuthContext";

export function AddUserForm() {
  const { register } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [email_verified_at, setEmailVerifiedAt] = useState(new Date());
  const [is_admin, setIsAdmin] = useState(false);
  const [profile_img, setProfileImage] = useState(
    "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-login-interface-abstract-blue-icon-png-image_3917504.jpg"
  );

  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleAddNewUser = async (event) => {
    event.preventDefault();
    register({
      name,
      email,
      password,
      password_confirmation,
      is_admin,
      profile_img
    });
  };

  return (
    <Card color="white" shadow={false} className="text-center py-4 mt-5">
      <Typography variant="h4" color="blue-gray">
        New User
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Add a new user to Librioteca!
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        onSubmit={handleAddNewUser}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="lg"
            placeholder="name..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="lg"
            placeholder="password..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password Confirmation
          </Typography>
          <Input
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            size="lg"
            placeholder="confirm password..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          checked={is_admin}
          onChange={handleCheckboxChange}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Set as Admin
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Create
        </Button>
      </form>
    </Card>
  );
}